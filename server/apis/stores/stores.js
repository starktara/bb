const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

router.get("/searchStores", (req, res) => {
    async function getStore() {
      const { body } = await client.search({
        index: "store-location",
        body: {
          query: {
            match: {
              id: req.query.id
            }
          }
        }
      });
      res.send(body.hits.hits[0]._source);
    }
    getStore().catch(console.log);
});

module.exports = router;