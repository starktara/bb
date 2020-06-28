const multer = require("multer");
const express = require("express");
const router = express.Router();
const Admzip = require("adm-zip");
const xlsxj = require("xlsx-to-json");
const fs=require('fs');
const glob=require('glob');

//excelSheet's JSON data
const data = require("../../Bulk/BulkDataJSON/Bulkexceldata.json");

//global fileName variable
var fileName = null;

var images=null;

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
  fileName = req.file.filename;

  console.log(fileName);

  const meta = req.body;

  async function asyncCall() {
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
            console.log(excelJSON);
          }
        }
      );

      //glob for the getting the images recursively

      const getDirectories = function (src, callback) {
        glob(src + '/**/*', callback);
      };
      getDirectories('./Bulk/BulkUploadFiles/images', function (err, res) {
        if (err) {
          console.log('Error', err);
        } else {
          
          images=res;
          console.log(typeof(images));
          console.log(images);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  asyncCall();
});

router.post("/uploadBikes", (req, res) => {
  async function upload() {
    const dataset = [
      {
        id: 1,
        name: "Activa",
        type: 2,
        model: 16,
        brand: 4,
        regnumber: "",
        descr: "",
        price: 42000,
        state: "Kerela",
        city: "Aluva",
        loc: "Pullinchode",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2016,
        mmonth: 0,
        kmdriven: 21230,
        images: ["Img-M1-1.jpg", "Img-M1-2.jpg", "Img-M1-3.jpg"],
        mimage: "Img-M1-1.jpg",
        owner: 1,
        cc: 100,
        bhp: 8,
        category: 2,
        mileage: 60,
        storeId: 1,
      },
    ];
    const body = dataset.flatMap((doc) => [
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
  }
  upload().catch(console.log);
});

module.exports = router;
