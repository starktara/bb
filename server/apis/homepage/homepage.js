const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

router.get("/getCategoryById", (req, res) => {
  async function getBikesForCategory() {
    const { body } = await client.search({
      index: "bike-details",
      body: {
        from: 0,
        size: 10000,
        query: {
          query_string: {
            query: req.query.searchTerm
          }
        },
      }
    });
    res.send(body.hits.hits);
  }
  getBikesForCategory().catch(console.log);
});

module.exports = router;
