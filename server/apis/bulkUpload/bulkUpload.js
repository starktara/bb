const multer = require("multer");
const express = require("express");
const router = express.Router();
const Admzip = require("adm-zip");
const xlsxj = require("xlsx-to-json");
const fs = require("fs");
const { Client } = require("@elastic/elasticsearch");
const { Router } = require("express");
const client = new Client({ node: "http://localhost:9200" });
const path = require("path");
// const glob = require("glob");

//global fileName variable
var fileName = null;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/Upload", upload.single("file"), function (req, res) {
  if (req.file) {
    fileName = req.file.filename;
    zipHelper();
    res.sendStatus(200);
  } else {
    res.sendStatus(409);
  }
});

router.get("/SampleTemplate", (req, res) => {
  fs.readFile("./apis/bulkUpload/SampleTemplate/SampleTemplate.xlsx", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.send(data);
    }
  });
});

function zipHelper() {
  try {
    const zip = new Admzip(`./public/${fileName}`);
    //extracting the file to the folder
    zip.extractAllTo(
      /*target path*/ "./Bulk/BulkUploadFiles",
      /*overwrite*/ true
    );
    //reading the xlsx file
    xlsxj(
      {
        input: "./Bulk/BulkUploadFiles/Records.xlsx",
        output: null,
      },
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          dataUpload(result)
            .then(() => {
              removeDir("../server/Bulk/BulkUploadFiles/images");
              fs.unlink(
                "../server/Bulk/BulkUploadFiles/Records.xlsx",
                (err) => {
                  if (err) {
                    throw err;
                  } else {
                    console.log("xlsx deleted");
                  }
                }
              );
              fs.unlink(`../server/public/${fileName}`, (err) => {
                if (err) {
                  throw err;
                } else {
                  console.log("zip deleted");
                }
              });
            })
            .catch(console.log);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function dataUpload(data) {
  const latLon = [
    { lat: 10.100809, lon: 76.348984 },
    { lat: 22.5726, lon: 88.3639 },
    { lat: 16.999954, lon: 81.786184 },
  ];
  const dataset = [...data];
  const modifiedData = dataset.map((vehicle) => ({
    id: Date.now(),
    name: vehicle.name,
    type: parseInt(vehicle.category),
    model: parseInt(vehicle.model),
    brand: parseInt(vehicle.brand),
    regnumber: vehicle.registrationNumber,
    descr: "",
    price: parseInt(vehicle.price),
    state: vehicle.state,
    city: vehicle.city,
    loc: vehicle.location,
    location: latLon[vehicle.storeId - 1],
    myear: parseInt(vehicle.manufacturingYear),
    mmonth: parseInt(vehicle.manufacturingMonth),
    kmdriven: parseInt(vehicle.kmdriven),
    images: vehicle.images.split(","),
    mimage: vehicle.images.split(",")[0],
    owner: parseInt(vehicle.NumberOfOwner),
    cc: parseInt(vehicle.cc),
    bhp: parseInt(vehicle.bhp),
    category: parseInt(vehicle.category),
    mileage: parseInt(vehicle.mileage),
    storeId: parseInt(vehicle.storeId),
    sold: "false",
    discountPercent: parseFloat(vehicle.discountPercent),
  }));
  // console.log(modifiedData)
  let imgArr = [];
  modifiedData.forEach((vehicle) => {
    vehicle.images.forEach((img) => {
      imgArr.push({
        path:
          "../server/Bulk/BulkUploadFiles/images/" +
          vehicle.regnumber +
          "/" +
          img,
        name: img,
      });
    });
  });
  imgArr.forEach((oldImage) => {
    fs.rename(
      oldImage.path,
      `../client/public/vehicles/${oldImage.name}`,
      () => {
        console.log("Images moved");
      }
    );
  });
  // console.log(imgArr)
  const body = modifiedData.flatMap((doc) => [
    { index: { _index: "bike-details" } },
    doc,
  ]);

  const { body: bulkResponse } = await client.bulk({ refresh: true, body });

  if (bulkResponse.errors) {
    const erroredDocuments = [];
    // The items array has the same order of the dataset we just indexed.
    // The presence of the `error` key indicates that the operation
    // that we did for the document has failed.
    bulkResponse.items.forEach((action, i) => {
      const operation = Object.keys(action)[0];
      if (action[operation].error) {
        erroredDocuments.push({
          // If the status is 429 it means that you can retry the document,
          // otherwise it's very likely a mapping error, and you should
          // fix the document before to try it again.
          status: action[operation].status,
          error: action[operation].error,
          operation: body[i * 2],
          document: body[i * 2 + 1],
        });
      }
    });
    console.log(erroredDocuments);
  }

  const { body: count } = await client.count({ index: "bike-details" });
}

const removeDir = function (path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    if (files.length > 0) {
      files.forEach(function (filename) {
        if (fs.statSync(path + "/" + filename).isDirectory()) {
          removeDir(path + "/" + filename);
        } else {
          fs.unlinkSync(path + "/" + filename);
        }
      });
      fs.rmdirSync(path);
    } else {
      fs.rmdirSync(path);
    }
    console.log("images deleted");
  } else {
    console.log("imgs not deleted.");
  }
};

module.exports = router;
