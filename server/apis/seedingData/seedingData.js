const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

/*create schema to store bike details*/
router.get("/createbikeMapping", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "bike-details",
        body: {
          mappings: {
            properties: {
              id: { type: "integer" },
              name: { type: "text" },
              type: { type: "integer" },
              brand: { type: "integer" },
              storeId:{type:"integer"},
              model: { type: "integer" },
              regnumber: { type: "text" },
              descr: { type: "text" },
              price: { type: "integer" },
              state: { type: "text" },
              city: { type: "text" },
              loc: { type: "text" },
              location: { type: "geo_point" },
              myear: { type: "integer" },
              mmonth: { type: "integer" },
              kmdriven: { type: "integer" },
              images: { type: "string" },
              mimage: { type: "string" },
              owner: { type: "string" },
              cc: { type: "integer" },
              bhp: { type: "integer" },
              category: { type: "integer" },
              mileage: { type: "integer" }
            }
          }
        }
      },
      { ignore: [400] }
    );
  }
  run().catch(console.log);
  res.json({ msg: "Index Created Sucessfully" });
});

router.get("/deleteMapping", (req, res) => {
  async function run() {
    await client.indices.delete(
      {
        index: req.query.index
      },
      { ignore: [400] }
    );
  }
  run().catch(console.log);
  res.json({ msg: "Index Deleted Sucessfully" });
});

router.get("/createStoreLocationMapping", (req, res) => {
  async function createMapping() {
    await client.indices.create(
      {
        index: "store-location",
        body: {
          mappings: {
            id: { type: "integer" },
            name: { type: "text" },
            city: { type: "text" },
            locality: { type: "text" },
            location: { type: "geo_point" }
          }
        }
      },
      { ignore: [400] }
    );
  }
  createMapping().catch(err => {
    console.log(err);
  });
  res.json({
    msg: "mapping created"
  });
});

router.get("/uploadBikes", (req, res) => {
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
        state: "Aluva",
        city: "Kerela",
        loc: "Pullinchode",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2016,
        mmonth: 0,
        kmdriven: 21230,
        images: ["Img-M1-1.jpg","Img-M1-2.jpg","Img-M1-3.jpg"],
        mimage: "Img-M1-1.jpg",
        owner: 1,
        cc: 100,
        bhp: 8,
        category: 2,
        mileage: 60,
        storeId:1
      },
      {
        id: 2,
        name: "Honda",
        type: 2,
        model: 17,
        brand: 4,
        regnumber: "",
        descr: "",
        price: 30000,
        state: "Aluva",
        city: "Kerela",
        loc: "Pullinchode",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2012,
        mmonth: 0,
        kmdriven: 61416,
        images: ["Img-M2-1.jpg","Img-M2-2.jpg","Img-M2-3.jpg"],
        mimage: "Img-M2-1.jpg",
        owner: 1,
        cc: 120,
        bhp: 10,
        category: 2,
        mileage: 65,
        storeId:1
      },
      {
        id: 3,
        name: "Royal Enfield Classic 500",
        type: 3,
        model: 18,
        brand: 2,
        regnumber: "",
        descr: "",
        price: 120000,
        state: "Aluva",
        city: "Kerela",
        loc: "Pullinchode",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2016,
        mmonth: 0,
        kmdriven: 14480,
        images: ["Img-M3-1.jpg","Img-M3-2.jpg","Img-M3-3.jpg"],
        mimage: "Img-M3-1.jpg",
        owner: 1,
        cc: 500,
        bhp: 27,
        category: 3,
        mileage: 32,
        storeId:1
      },
      {
        id: 4,
        name: "Honda Unicorn 160",
        type: 1,
        model: 19,
        brand: 4,
        regnumber: "",
        descr: "",
        price: 45000,
        state: "Aluva",
        city: "Kerela",
        loc: "Pullinchode",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2015,
        mmonth: 0,
        kmdriven: 0,
        images: ["Img-M4-1.jpg","Img-M4-2.jpg","Img-M4-3.jpg"],
        mimage: "Img-M4-1.jpg",
        owner: 1,
        cc: 160,
        bhp: 14,
        category: 1,
        mileage: 62,
        storeId:1
      }
    ];
    const body = dataset.flatMap(doc => [
      { index: { _index: "bike-details" } },
      doc
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
            document: body[i * 2 + 1]
          });
        }
      });
      console.log(erroredDocuments);
    }

    const { body: count } = await client.count({ index: "bike-details" });
    res.json({
      msg: "Data Seeded"
    });
  }
  upload().catch(console.log);
});

router.get("/uploadLocations", (req, res) => {
  async function upload() {
    const dataset = [
      {
        id: 1,
        name: "Aluva, Kerela",
        city: "Aluva",
        locality: "Building No. XVII – 27&28 , Pullinchode, Aluva - 683101",
        location: { lat: 31.12, lon: -71.34 }
      }
    ];
    const body = dataset.flatMap(doc => [
      { index: { _index: "store-location" } },
      doc
    ]);

    const { body: bulkResponse } = await client.bulk({ refresh: true, body });

    if (bulkResponse.errors) {
      const erroredDocuments = [];
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0];
        if (action[operation].error) {
          erroredDocuments.push({
            status: action[operation].status,
            error: action[operation].error,
            operation: body[i * 2],
            document: body[i * 2 + 1]
          });
        }
      });
      console.log(erroredDocuments);
    }

    const { body: count } = await client.count({ index: "store-location" });
    console.log(count);
  }
  upload().catch(console.log);
  res.json({ msg: "Location index seeded" });
});



/*create schema to store bike details*/
router.get("/createLeadDetail", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "leadDetail",
        body: {
          mappings: {
            properties: {
              name: { type: "text" },
              email: { type: "text" },
              phone: { type: "integer" },
              emiOption: { type: "integer" },
              bikeId: { type: "integer" },
              storeId: { type: "integer" }
            }
          }
        }
      },
      { ignore: [400] }
    );
  }
  run().catch(console.log);
  res.json({ msg: "Index Created Sucessfully" });
});


/*create schema to store bike details*/
router.get("/sellBikeDetails", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "leadDetail",
        body: {
          mappings: {
            properties: {
              id: { type: "integer" },
              name: { type: "text" },
              type: { type: "integer" },
              brand: { type: "integer" },
              model: { type: "integer" },
              regnumber: { type: "text" },
              descr: { type: "text" },
              price: { type: "integer" },
              state: { type: "text" },
              city: { type: "text" },
              loc: { type: "text" },
              location: { type: "geo_point" },
              myear: { type: "integer" },
              mmonth: { type: "integer" },
              kmdriven: { type: "integer" },
              images: { type: "string" },
              mimage: { type: "string" },
              owner: { type: "string" },
              cc: { type: "integer" },
              bhp: { type: "integer" },
              category: { type: "integer" },
              mileage: { type: "integer" },
              address:{type:"text"},
              mobile:{type:"integer"}
            }
          }
        }
      },
      { ignore: [400] }
    );
  }
  run().catch(console.log);
  res.json({ msg: "Index Created Sucessfully" });
});


router.get("/getAllBikes", (req, res) => {
  async function getData() {
    const { body } = await client.search({
      index: "bike-details",
      body: {
        query: {
          match_all: {}
        }
      }
    });
    res.send(body.hits.hits);
  }
  getData().catch(console.log);
});

router.get("/getAllStoreLocations", (req, res) => {
  async function getData() {
    const { body } = await client.search({
      index: "store-location",
      body: {
        query: {
          match_all: {}
        }
      }
    });
    res.send(body.hits.hits);
  }
  getData().catch(console.log);
});

router.get("/searchBike", (req, res) => {
  async function getBike() {
    const { body } = await client.search({
      index: "bike-details",
      body: {
        query: {
          // match: {
          //   id: req.query.id
          // }
          terms: {
            _id: [req.query.vehicleid]
          }
        }
      }
    });
    res.send(body.hits.hits);
  }
  getBike().catch(console.log);
});
module.exports = router;
