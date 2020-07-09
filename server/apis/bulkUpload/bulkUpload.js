const multer = require("multer");
const express = require("express");
const router = express.Router();
const Admzip = require("adm-zip");
const xlsxj = require("xlsx-to-json");
const fs = require("fs");
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

//excelSheet's JSON data
let data = require("../../Bulk/BulkDataJSON/Bulkexceldata.json");
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

async function datasetUpload() {
  var counter = 0;
  let imgArr = data.map((item) => item.images);
  Object.keys(data).forEach(function (object) {
    let cpyImgArr = imgArr[counter];
    data[object]["location"] = { lat: 10.100914, lon: 76.348984 };
    data[object]["images"] = [cpyImgArr];
    counter++;
  });

  console.log(data);
  const body = data.flatMap((doc) => [
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
  res.json({
    msg: "Data Seeded",
  });
  upload().catch(console.log);
}

function asyncCall() {
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
        output: "./Bulk/BulkDataJSON/Bulkexceldata.json",
      },
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          //getting the excel's json format into a variable
          const excelJSON = result;
          //console.log(excelJSON);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

router.post("/Upload", upload.single("file"), function (req, res) {
  //farji functionality res.sendStatus(200);
  fileName = req.file.filename;
  console.log(fileName);
  asyncCall();
  datasetUpload();
});

module.exports = router;
