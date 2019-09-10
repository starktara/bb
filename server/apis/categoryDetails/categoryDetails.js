const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });


router.get("/getCategoryById", (req, res) => {
    let filterData = JSON.parse(req.query.filterData);
    let sortKey = {};
    let mustArray = [];
    mustArray.push({
      match: {
        category: req.query.category
      }
    });
  
    if (filterData != null) {
      if (filterData.sort.column != "") {
        let column = filterData.sort.column;
        let order = filterData.sort.order;
        sortKey[column] = {
          order: order
        };
      }
      if (filterData.myear.length > 0) {
        let mYear = filterData.myear;
        mustArray.push({
          terms: {
            myear: mYear
          }
        });
      }
      if (filterData.brand.length > 0) {
        let brand = filterData.brand;
        mustArray.push({
          terms: {
            brand: brand
          }
        });
      }
    } else {
      sortKey["id"] = { order: "desc" };
    }
  
    async function getBikesForCategory() {
      const { body } = await client.search({
        index: "bike-details",
        body: {
          query: {
            bool: {
              must: mustArray
            }
          },
          sort: [sortKey]
        }
      });
      res.send(body.hits.hits);
    }
    getBikesForCategory().catch(console.log);
  });
  
  module.exports = router;
  
  // "query": {
  //   "bool" : {
  //     "must" : {
  //       "term" : { "user" : "kimchy" }
  //     },
  //     "filter": {
  //       "term" : { "tag" : "tech" }
  //     },
  //     "must_not" : {
  //       "range" : {
  //         "age" : { "gte" : 10, "lte" : 20 }
  //       }
  //     },
  //     "should" : [
  //       { "term" : { "tag" : "wow" } },
  //       { "term" : { "tag" : "elasticsearch" } }
  //     ],
  //     "minimum_should_match" : 1,
  //     "boost" : 1.0
  //   }
  // }
  