const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

router.get("/getCategoryById", (req, res) => {
  let filter = JSON.parse(req.query.filterData);
  async function getBikesForCategory() {
    const { body } = await client.search({
      index: "bike-details",
      body: {
        from: 0,
        size: 10000,
        query: {
          bool: {
            should: [
              {
                match: {
                  descr: req.query.searchTerm
                }
              },
              {
                match: {
                  name: req.query.searchTerm
                }
              },
              {
                match: {
                  state: req.query.searchTerm
                }
              },
              {
                match: {
                  city: filter.city
                }
              },
            ]
          }
        }
      }
    });
    res.send(body.hits.hits);
  }
  getBikesForCategory().catch(console.log);
});

module.exports = router;
