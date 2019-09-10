const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
//Require route files
const seedData = require("./apis/seedingData/seedingData");
const categoryDetails = require("./apis/categoryDetails/categoryDetails");
//middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/apis/seedData", seedData);
app.use("/apis/categoryDetails", categoryDetails);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", function(req, res) {
  res.send("Hello World");
});

const port = process.env.PORT || 4200;

app.listen(port);
