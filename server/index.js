const express = require('express');
const app = express();
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});
 
client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace(error);
    } else {
      console.log('All is well');
    }
  });

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(4200);