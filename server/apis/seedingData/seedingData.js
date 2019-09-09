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
            model: { type: 'integer' },
            regnumber: { type: 'text' },
            descr: { type: 'text' },
            price: { type: 'integer' },
            state: { type: 'text' },
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
  res.json({ msg: "Index Created Sucessfully" })

}
);

router.get('/createStoreLocationMapping', (req,res) =>{
  async function createMapping() {
    await client.indices.create({
      index: 'store-location',
      body:{
        mappings:{
          id: { type: 'integer' },
          name: { type: 'text' },
          city: { type: 'text'},
          locality: { type: 'text'},
          location : {type:'geo_point'}
        }
      }
    },{ ignore: [400] });
  }
  createMapping().catch((err) => { console.log(err);})
  res.json({
    msg: 'mapping created'
  });
});

router.get("/uploadBikes", (req,res) => {
  async function upload(){

    const dataset = [{
      id: 1,
      name: 'Yamaha X',
      type: 1,
      model: 1,
      brand: 1,
      regnumber: 'GJ27BA0711',
      descr : "Pristine condition",
      price : 26000,
      state: 'Gujrat',
      city  : "Ahemdabad",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 24523,
      images : ["11.jpg"],
      mimage : "11.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    },{
      id: 2,
      name: 'Harley X',
      type: 1,
      model: 2,
      brand: 2,
      regnumber: 'GJ27J5155',
      descr : "Pristine condition",
      price : 26000,
      state: 'Gujrat',
      city  : "Ahemdabad",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2012,
      mmonth : 3,
      kmdriven : 17935,
      images : ["21.jpg","22.jpg"],
      mimage : "21.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    },{
      id: 3,
      name: 'Yamaha Y',
      type: 1,
      model: 3,
      brand: 1,
      regnumber: 'KA04HX4942',
      descr : "Pristine condition",
      price : 26000,
      state: 'Karnataka',
      city  : "Begaluru",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 12345,
      images : ["31.jpg"],
      mimage : "31.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    },{
      id: 4,
      name: 'Royal Enf X',
      type: 1,
      model: 4,
      brand: 2,
      regnumber: 'MH04HP8092',
      descr : "Pristine condition",
      price : 26000,
      state: 'Maharashtra',
      city  : 'Mumbai',
      loc : 'Okhla Phase 3',
      location: { 'lat': 41.12, 'lon': -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 34165,
      images : ['41.jpg', '42.jpg'],
      mimage : '41.jpg',
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    },{
      id: 5,
      name: 'Activa X',
      type: 2,
      model: 6,
      brand: 5,
      regnumber: 'GJ27BA0711',
      descr : "Pristine condition",
      price : 26000,
      state: 'Gujrat',
      city  : "Ahemdabad",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 24523,
      images : ["51.jpg","52.jpg"],
      mimage : "51.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 2,
      mileage : 60
    },{
      id: 6,
      name: 'Maestro X',
      type: 2,
      model: 8,
      brand: 8,
      regnumber: 'GJ27J5155',
      descr : "Pristine condition",
      price : 26000,
      state: 'Gujrat',
      city  : "Ahemdabad",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2012,
      mmonth : 3,
      kmdriven : 17935,
      images : ["61.jpg","62.jpg","63.jpg"],
      mimage : "61.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 2,
      mileage : 60
    },{
      id: 7,
      name: 'ABC XYZ',
      type: 2,
      model: 9,
      brand: 7,
      regnumber: 'KA04HX4942',
      descr : "Pristine condition",
      price : 26000,
      state: 'Karnataka',
      city  : "Begaluru",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 12345,
      images : ["71.jpg", "72.jpg", "73.jpg"],
      mimage : "71.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    },{
      id: 8,
      name: 'Qwert Zawert',
      type: 2,
      model: 9,
      brand: 8,
      regnumber: 'MH04HP8092',
      descr : "Pristine condition",
      price : 26000,
      state: 'Maharashtra',
      city  : 'Mumbai',
      loc : 'Okhla Phase 3',
      location: { 'lat': 41.12, 'lon': -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 34165,
      images : ['81.jpg', '82.jpg'],
      mimage : '81.jpg',
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 1,
      mileage : 60
    },{
      id: 9,
      name: 'Name zz',
      type: 3,
      model: 15,
      brand: 10,
      regnumber: 'GJ27BA0711',
      descr : "Pristine condition",
      price : 26000,
      state: 'Gujrat',
      city  : "Ahemdabad",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 24523,
      images : ["91.jpg"],
      mimage : "91.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 3,
      mileage : 60
    },{
      id: 10,
      name: 'Saaww Qswww',
      type: 3,
      model: 9,
      brand: 10,
      regnumber: 'GJ27J5155',
      descr : "Pristine condition",
      price : 26000,
      state: 'Gujrat',
      city  : "Ahemdabad",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 17935,
      images : ["101.jpg","102.jpg"],
      mimage : "101.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 3,
      mileage : 60
    },{
      id: 11,
      name: 'Aqqq Qwww',
      type: 3,
      model: 8,
      brand: 5,
      regnumber: 'KA04HX4942',
      descr : "Pristine condition",
      price : 26000,
      state: 'Karnataka',
      city  : "Begaluru",
      loc : "Okhla Phase 3",
      location: { "lat": 41.12, "lon": -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 12345,
      images : ["121.jpg", "122.jpg"],
      mimage : "121.jpg",
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 3,
      mileage : 60
    },{
      id: 12,
      name: 'Zaqwcce Ccccc',
      type: 3,
      model: 3,
      brand: 3,
      regnumber: 'MH04HP8092',
      descr : "Pristine condition",
      price : 26000,
      state: 'Maharashtra',
      city  : 'Mumbai',
      loc : 'Okhla Phase 3',
      location: { 'lat': 41.12, 'lon': -71.34},
      myear : 2015,
      mmonth : 3,
      kmdriven : 34165,
      images : ['121.jpg', '122.jpg'],
      mimage : '121.jpg',
      owner : 1,
      cc  : 180,
      bhp : 11,
      category : 3,
      mileage : 60
    }
  ];
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
    res.json({
      msg:'Data Seeded'
    });
  }
  upload().catch(console.log);
});

router.get("/uploadLocations", (req,res) => {
  async function upload(){

    const dataset = [{
      id: 1,
      name: "R.K Dealers",
      city: "New Delhi",
      locality: "Okhla Phase 3",
      location : { "lat": 31.12, "lon": -71.34 }
    }];
     const body = dataset.flatMap(doc => [{ index: { _index: 'store-location' } }, doc]);
  
    const { body: bulkResponse } = await client.bulk({ refresh: true, body })
  
    if (bulkResponse.errors) {
      const erroredDocuments = []
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0]
        if (action[operation].error) {
          erroredDocuments.push({
            status: action[operation].status,
            error: action[operation].error,
            operation: body[i * 2],
            document: body[i * 2 + 1]
          })
        }
      })
      console.log(erroredDocuments)
    }
  
    const { body: count } = await client.count({ index: 'store-location' })
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
    res.send(body.hits.hits);
     
  }
  getData().catch(console.log);
});

router.get("/getAllStoreLocations",(req,res) => {
  async function getData(){
    const { body } = await client.search({
      index: 'store-location',
      body: {
        query: {
          match_all: {}
        }
      }
    })
    res.send(body.hits.hits);
     
  }
  getData().catch(console.log);
});

router.get('/searchBike', (req,res) => {
  async function getBike(){
    const {body} = await client.search({
      index: 'bike-details',
      body: {
        query: {
          // match: {
          //   id: req.query.id
          // }
          terms: {
            _id: [ req.query.vehicleid ] 
          }
        }
      }
    });
    res.send(body.hits.hits);
  }
  getBike().catch(console.log);
});

router.get('/getCategoryById', (req,res) => {
  let filterData = JSON.parse(req.query.filterData);
  let sortKey = {};

  if(filterData != null){
    if(filterData.sort.column != ''){
      let column =filterData.sort.column;
      let order = filterData.sort.order;
      sortKey[column] = {
        order:order
      }
    }
  }else{
    sortKey['id'] = {order:"desc"};
  }

  async function getBikesForCategory(){
    console.log(req.query)
    const {body} = await client.search({
      index: 'bike-details',
      body: {
        query: {
          match: {
             category: req.query.category
          }
        },
       sort:[sortKey]
      }
    });
    res.send(body.hits.hits);
  }
  getBikesForCategory().catch(console.log);
});

module.exports  = router;