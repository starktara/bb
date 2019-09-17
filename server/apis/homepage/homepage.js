const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

router.get("/getCategoryById", (req, res) => {
  let filterData = JSON.parse(req.query.filterData);
  let sortKey = {};
  let mustArray = [];
  mustArray.push({
    multi_match: {
      category: req.query.category
    }
  });

  async function getBikesForCategory() {
    const { body } = await client.search({
      index: "bike-details",
      body: {
        from: 0,
        size: 10000,
        query_string: {
          query: "*mar*"
        },
        sort: [sortKey]
      }
    });
    res.send(body.hits.hits);
  }
  getBikesForCategory().catch(console.log);
});

module.exports = router;
