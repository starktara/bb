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
        name: "Yamaha SZ RR",
        type: 1,
        model: 2016,
        brand: 1,
        regnumber: "",
        descr: "",
        price: 38000,
        state: "Andhra Pradesh",
        city: "",
        loc: "Rajamundry",
        location: { lat: 16.999954, lon: 81.786184 },
        myear: 2016,
        mmonth: 0,
        kmdriven: 22469,
        images: ["SZRR_1_20191216T123030.jpeg","SZRR_2_20191216T123030.jpeg","SZRR_3_20191216T123030.jpeg","SZRR_4_20191216T123030.jpeg"],
        mimage: "SZRR_3_20191216T123030.jpeg",
        owner: 1,
        cc: 150,
        bhp: 8,
        category: 1,
        mileage: 60,
        storeId:1
      },
      {
        id: 2,
        name: "Hero Mastero Edge",
        type: 2,
        model: 2015,
        brand: 2,
        regnumber: "",
        descr: "",
        price: 40000,
        state: "Andhra Pradesh",
        city: "",
        loc: "Rajamundry",
        location: { lat: 16.999954, lon: 81.786184 },
        myear: 2015,
        mmonth: 0,
        kmdriven: 5737,
        images: ["Maestro_1_20191216T123130.jpeg","Maestro_2_20191216T123130.jpeg","Maestro_3_20191216T123130.jpeg", "Maestro_4_20191216T123130.jpeg"],
        mimage: "Maestro_3_20191216T123130.jpeg",
        owner: 1,
        cc: 110,
        bhp: 10,
        category: 2,
        mileage: 50,
        storeId:1
      },
      {
        id: 3,
        name: "Hero Glamour i3s",
        type: 1,
        model: 2017,
        brand: 2,
        regnumber: "",
        descr: "",
        price: 53000,
        state: "Andhra Pradesh",
        city: "",
        loc: "Rajamundry",
        location: { lat: 16.999954, lon: 81.786184 },
        myear: 2017,
        mmonth: 0,
        kmdriven: 31809,
        images: ["Glamour_1_20191216T123230.jpeg","Glamour_2_20191216T123230.jpeg","Glamour_3_20191216T123230.jpeg", "Glamour_4_20191216T123230.jpeg"],
        mimage: "Glamour_2_20191216T123230.jpeg",
        owner: 1,
        cc: 125,
        bhp: 10,
        category: 1,
        mileage: 55,
        storeId:1
      },
      {
        id: 4,
        name: "Hero Duet",
        type: 2,
        model: 2016,
        brand: 2,
        regnumber: "",
        descr: "",
        price: 30000,
        state: "Andhra Pradesh",
        city: "",
        loc: "Rajamundry",
        location: { lat: 16.999954, lon: 81.786184 },
        myear: 2016,
        mmonth: 0,
        kmdriven: 58157,
        images: ["Duet_1_20191216T123330.jpeg","Duet_2_20191216T123330.jpeg","Duet_3_20191216T123330.jpeg", "Duet_4_20191216T123330.jpeg"],
        mimage: "Duet_4_20191216T123330.jpeg",
        owner: 1,
        cc: 110,
        bhp: 8,
        category: 2,
        mileage: 50,
        storeId:1
      },
      {
        id: 5,
        name: "Honda SP Shine",
        type: 1,
        model: 2017,
        brand: 3,
        regnumber: "",
        descr: "",
        price: 50000,
        state: "Andhra Pradesh",
        city: "",
        loc: "Rajamundry",
        location: { lat: 16.999954, lon: 81.786184 },
        myear: 2017,
        mmonth: 0,
        kmdriven: 29279,
        images: ["Shine_1_20191216T123430.jpeg","Shine_2_20191216T123430.jpeg","Shine_3_20191216T123430.jpeg", "Shine_4_20191216T123430.jpeg"],
        mimage: "Shine_4_20191216T123430.jpeg",
        owner: 1,
        cc: 125,
        bhp: 12,
        category: 1,
        mileage: 70,
        storeId:1
      },
      {
        id: 6,
        name: "Yamaha Fascino 2016",
        type: 2,
        model: 2016,
        brand: 1,
        regnumber: "",
        descr: "",
        price: 40000,
        state: "Kerela",
        city: "",
        loc: "Alluva",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2016,
        mmonth: 0,
        kmdriven: 71067,
        images: ["Fsno16_1_20191216T123530.jpg","Fsno16_2_20191216T123530.jpg","Fsno16_3_20191216T123530.jpg", "Fsno16_4_20191216T123530.jpg"],
        mimage: "Fsno16_1_20191216T123530.jpg",
        owner: 1,
        cc: 100,
        bhp: 12,
        category: 2,
        mileage: 40,
        storeId:2
      },
      {
        id: 7,
        name: "Yamaha Fascino 2017",
        type: 2,
        model: 2017,
        brand: 1,
        regnumber: "",
        descr: "",
        price: 45000,
        state: "Kerela",
        city: "",
        loc: "Alluva",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2017,
        mmonth: 0,
        kmdriven: 17041,
        images: ["Fsno17_1_20191216T123630.jpg","Fsno17_2_20191216T123630.jpg","Fsno17_3_20191216T123630.jpg", "Fsno17_4_20191216T123630.jpg"],
        mimage: "Fsno17_1_20191216T123630.jpg",
        owner: 1,
        cc: 100,
        bhp: 12,
        category: 2,
        mileage: 40,
        storeId:2
      },
      {
        id: 8,
        name: "Honda Activa",
        type: 2,
        model: 2013,
        brand: 3,
        regnumber: "",
        descr: "",
        price: 30000,
        state: "Andhra Pradesh",
        city: "",
        loc: "Rajamundry",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2013,
        mmonth: 0,
        kmdriven: 28582,
        images: ["Activa_1_20191216T123730.jpg","Activa_2_20191216T123730.jpg","Activa_3_20191216T123730.jpg", "Activa_4_20191216T123730.jpg"],
        mimage: "Activa_1_20191216T123730.jpg",
        owner: 1,
        cc: 100,
        bhp: 12,
        category: 1,
        mileage: 40,
        storeId: 2
      },
      {
        id: 9,
        name: "Hero Passion Plus",
        type: 1,
        model: 2010,
        brand: 2,
        regnumber: "",
        descr: "",
        price: 25000,
        state: "Andhra Pradesh",
        city: "",
        loc: "Rajamundry",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2010,
        mmonth: 0,
        kmdriven: 1203,
        images: ["Passion_1_20191216T123830.jpg","Passion_2_20191216T123830.jpg","Passion_3_20191216T123830.jpg", "Passion_4_20191216T123830.jpg"],
        mimage: "Passion_1_20191216T123830.jpg",
        owner: 1,
        cc: 100,
        bhp: 12,
        category: 1,
        mileage: 80,
        storeId:1
      },
      {
        id: 10,
        name: "Bajaj Pulsar 135 LS",
        type: 1,
        model: 2017,
        brand: 4,
        regnumber: "",
        descr: "",
        price: 40000,
        state: "West Bengal",
        city: "",
        loc: "Kolkata",
        location: { lat: 22.5726, lon: 88.3639 },
        myear: 2017,
        mmonth: 0,
        kmdriven: 26494,
        images: ["Pulsar_LS_1_20191216T123930.jpeg","Pulsar_LS_2_20191216T123930.jpeg","Pulsar_LS_3_20191216T123930.jpeg", "Pulsar_LS_4_20191216T123930.jpeg"],
        mimage: "Pulsar_LS_3_20191216T123930.jpeg",
        owner: 1,
        cc: 150,
        bhp: 15,
        category: 1,
        mileage: 55,
        storeId: 3
      },
      {
        id: 11,
        name: "Honda CB Hornet",
        type: 1,
        model: 2016,
        brand: 3,
        regnumber: "",
        descr: "",
        price: 52000,
        state: "West Bengal",
        city: "",
        loc: "Kolkata",
        location: { lat: 22.5726, lon: 88.3639 },
        myear: 2016,
        mmonth: 0,
        kmdriven: 6546,
        images: ["Hornet_1_20191216T124045.jpeg","Hornet_2_20191216T124045.jpeg","Hornet_3_20191216T124045.jpeg", "Hornet_4_20191216T124045.jpeg"],
        mimage: "Hornet_1_20191216T124045.jpeg",
        owner: 1,
        cc: 100,
        bhp: 8,
        category: 1,
        mileage: 60,
        storeId: 3
      },
      {
        id: 12,
        name: "TVS Apache RTR 160",
        type: 3,
        model: 2015,
        brand: 5,
        regnumber: "",
        descr: "",
        price: 50000,
        state: "West Bengal",
        city: "",
        loc: "Kolkata",
        location: { lat: 22.5726, lon: 88.3639 },
        myear: 2015,
        mmonth: 0,
        kmdriven: 27899,
        images: ["Apache_1_20191216T124215.jpeg","Apache_2_20191216T124215.jpeg","Apache_3_20191216T124215.jpeg", "Apache_4_20191216T124215.jpeg"],
        mimage: "Apache_4_20191216T124215.jpeg",
        owner: 1,
        cc: 150,
        bhp: 12,
        category: 3,
        mileage: 40,
        storeId: 3
      },
      {
        id: 13,
        name: "Bajaj Avenger 220 Street",
        type: 3,
        model: 2017,
        brand: 4,
        regnumber: "",
        descr: "",
        price: 59000,
        state: "West Bengal",
        city: "",
        loc: "Kolkata",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2017,
        mmonth: 0,
        kmdriven: 8845,
        images: ["Avenger_1_20191216T124320.jpeg","Avenger_2_20191216T124320.jpeg","Avenger_3_20191216T124320.jpeg", "Avenger_4_20191216T124320.jpeg"],
        mimage: "Avenger_4_20191216T124320.jpeg",
        owner: 1,
        cc: 200,
        bhp: 20,
        category: 3,
        mileage: 35,
        storeId: 3
      },
      {
        id: 14,
        name: "Mahindra Centuro",
        type: 1,
        model: 2015,
        brand: 6,
        regnumber: "",
        descr: "",
        price: 25000,
        state: "West Bengal",
        city: "",
        loc: "Kolkata",
        location: { lat: 10.100914, lon: 76.348984 },
        myear: 2015,
        mmonth: 0,
        kmdriven: 8000,
        images: ["Centuro_1_20191216T124557.jpeg","Centuro_2_20191216T124557.jpeg","Centuro_3_20191216T124557.jpeg", "Centuro_4_20191216T124557.jpeg"],
        mimage: "Centuro_1_20191216T124557.jpeg",
        owner: 1,
        cc: 100,
        bhp: 12,
        category: 1,
        mileage: 90,
        storeId: 3
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
