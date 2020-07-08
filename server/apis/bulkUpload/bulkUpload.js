const multer = require("multer");
const express = require("express");
const router = express.Router();
const Admzip = require("adm-zip");
const xlsxj = require("xlsx-to-json");
const fs = require("fs");
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });
// const glob = require("glob");

//excelSheet's JSON data
let data = require("../../Bulk/BulkDataJSON/Bulkexceldata.json");
//keys for the searching
let keys = [];

//global fileName variable
var fileName = null;
var images = null;

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
  res.sendStatus(200);

  fileName = req.file.filename;

  console.log(fileName);

  const meta = req.body;

  async function upload() {
    const dataset = [...data];
    Object.keys(dataset).map(function (object) {
      dataset[object]["location"] = { lat: 10.100914, lon: 76.348984 };
    });
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
    upload().catch(console.log);
  }

  async function getJSONdata() {
    //getting the name key from the json array
    try {
      const cpydata = [...data];
      keys = cpydata.map((item) => ({ name: item.name }));
      console.log(keys);
    } catch (e) {
      console.log(e);
    }
  }

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
    } catch (error) {
      console.log(error);
    }
  }
  asyncCall();
  getJSONdata();
  upload();
});

module.exports = router;
