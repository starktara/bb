const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });
//details of seller and bike from sell page
router.get("/createSellerDetail", (req, res) => {
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

//details of buyer and bike from product detail page
router.get("/createInterestedBuyer", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "buyerDetail",
        body: {
          mappings: {
            properties: {
              id: { type: "integer" },
              buyerName: { type: "text" },
              emailId: { type: "text" },
              phone: { type: "integer" },
              isEmi: { type: "integer" },
              vehicleId: { type: "integer" }
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

//details of buyer and bike from product detail page
router.get("/createFranchiserequest", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "franchise-request",
        body: {
          mappings: {
            properties: {
              id: { type: "integer" },
              name: { type: "text" },
              emailId: { type: "text" },
              phone: { type: "integer" },
              city: { type: "integer" },
              address: { type: "text" },
              pincode: { type: "integer" }
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

module.exports = router;
