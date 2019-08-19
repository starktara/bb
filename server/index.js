const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
//Require route files
const seedData = require("./apis/seedingData/seedingData");
//middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/apis/seedData", seedData);


// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
const port = process.env.PORT || 4200;
 
app.listen(port);