const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

router.get("/getCategoryById", (req, res) => {
  let filterData = JSON.parse(req.query.filterData);
  console.log(req.query.searchTerm)
  async function getBikesForCategory() {
    if (req.query.searchTerm != "null") {
      const { body } = await client.search({
        index: "bike-details",
        body: {
          from: 0,
          size: 10000,
          query: {
            bool: {
              must: [
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
                    city: filterData.city
                  }
                },
              ]
            }
          }
        }
      });
      res.send(body.hits.hits);
    } else {
      let sortKey = {};
      let mustArray = [];
      let shouldArray = [];
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
          var i = 1;
          for (let value of budget) {
            let rangeArr = value ? value.split("-") : value == 0 ? ["1", "15000"] : ["100000", "115000"];
            let gte = rangeArr[0];
            let lte = rangeArr[1];
            if (i == 1) {
              mustArray.push({
                range: {
                  price: { gte: gte, lte: lte }
                }
              });
            } else {
              shouldArray.push({
                range: {
                  price: { gte: gte, lte: lte }
                }
              });
            }
            i++;
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
            match_phrase: {
              city: filterData.searchTerm
            }
          });
        }
      } else {
        sortKey["id"] = { order: "desc" };
      }

      const { body } = await client.search({
        index: "bike-details",
        body: {
          from: 0,
          size: 10000,
          query: {
            bool: {
              must: mustArray,
              should: shouldArray
            }
          },
          sort: [sortKey]
        }
      });
      res.send(body.hits.hits);
    }
  }
  getBikesForCategory().catch(console.log);
});

module.exports = router;
