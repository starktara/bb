const express = require("express");
const router = express.Router();
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });


/*create schema to store bike details*/
router.get("/createbikeMapping", (req, res) =>{
  async function run () {
    await client.indices.create({
      index: 'bike-details',
      body: {
        mappings: {
          properties: {
            id: { type: 'integer' },
            name: { type: 'text' },
            type: { type: 'integer' },
            brand: { type: 'integer' },
            descr: { type: 'text' },
            price: { type: 'integer' },
            city: { type: 'text' },
            loc:  {type:'text'},
            location : {type:'geo_point'},
            myear : {type:'integer'},
            mmonth:{type:'integer'},
            kmdriven:{type:'integer'},
            images:{type:"string"},
            mimage:{type:"string"},
            owner:{type:"string"},
            cc:{type:"integer"},
            bhp:{type:"integer"},
            category:{type:"integer"},
            mileage:{type:"integer"}            
          }
        }
      }
    }, { ignore: [400] })
  }
  run().catch(console.log)
  res.json({ msg: "posts works" })

}
);

router.get("/uploadBikes", (req,res) => {
  async function upload(){

    const dataset = [{
      id: 1,
      name  : "Bajaj Pulsar",
      type  : 1,
      brand : 1,
      descr : "Pristine condition",
      price : 26000,
      city  : "Delhi",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2012,
      mmonth : 3,
      kmdriven : 26300,
      images : ["second.jpg","third.jpg","fourth.jpg"],
      mimage : "bike-img.png",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    }, {
      id: 2,
      name  : "Bajaj Platina",
      type  : 1,
      brand : 1,
      descr : "Pristine condition",
      price : 26000,
      city  : "Delhi",
      loc : "Okhla Phase 3",
      location: { "lat": 31.12, "lon": -71.34},
      myear : 2014,
      mmonth : 3,
      kmdriven : 26300,
      images : ["second.jpg","third.jpg","fourth.jpg"],
      mimage : "bike-img.png",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    }, {
      id: 3,
      name  : "Hero Honda Splendor",
      type  : 1,
      brand : 1,
      descr : "Pristine condition",
      price : 26000,
      city  : "Mumbai",
      loc : "Okhla Phase 3",
      location: { "lat": 31.12, "lon": -71.34},
      myear : 2014,
      mmonth : 3,
      kmdriven : 26300,
      images : ["second.jpg","third.jpg","fourth.jpg"],
      mimage : "bike-img.png",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    }];
  console.log(dataset);
     const body = dataset.flatMap(doc => [{ index: { _index: 'bike-details' } }, doc]);
  
    const { body: bulkResponse } = await client.bulk({ refresh: true, body })
  
    if (bulkResponse.errors) {
      const erroredDocuments = []
      // The items array has the same order of the dataset we just indexed.
      // The presence of the `error` key indicates that the operation
      // that we did for the document has failed.
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0]
        if (action[operation].error) {
          erroredDocuments.push({
            // If the status is 429 it means that you can retry the document,
            // otherwise it's very likely a mapping error, and you should
            // fix the document before to try it again.
            status: action[operation].status,
            error: action[operation].error,
            operation: body[i * 2],
            document: body[i * 2 + 1]
          })
        }
      })
      console.log(erroredDocuments)
    }
  
    const { body: count } = await client.count({ index: 'bike-details' })
    console.log(count)
  }
  upload().catch(console.log);
});

router.get("/getAllBikes",(req,res) => {
  async function getData(){
    const { body } = await client.search({
      index: 'bike-details',
      body: {
        query: {
          match_all: {}
        }
      }
    })
    console.log(body)
  }
  getData().catch(console.log);
})
  
module.exports  = router;