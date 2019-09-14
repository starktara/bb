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
    if (filterData.sort.column != null) {
      let column = filterData.sort.column;
      let order = filterData.sort.order;
      sortKey[column] = {
        order: order
      };
    } else {
      sortKey["id"] = { order: "desc" };
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

    if (filterData.budget.length > 0) {
      let budget = filterData.budget;
      for (let value of budget) {
        let rangeArr = value.split("-");
        let gte = rangeArr[0];
        let lte = rangeArr[1];
        mustArray.push({
          range: {
            price: { gte: gte, lte: lte }
          }
        });
      }
    }

    if (filterData.kmdriven != null) {
      mustArray.push({
        range: {
          kmdriven: { gte: 0, lte: filterData.kmdriven }
        }
      });
    }
    if (filterData.searchTerm != null) {      
      mustArray.push({
        wildcard: {
          city: {
            value: filterData.searchTerm 
          }
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
        from: 0,
        size: 10000,
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
