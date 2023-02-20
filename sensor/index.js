var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var cors = require("cors");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(bodyParser.json());

// Connect to the database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sensor_data",
});

connection.connect();

app.get("/data", (req, res, next) => {
  connection.query(
    "SELECT temperature, moisture1, moisture2, humidity, reading_time FROM sensor ORDER BY id DESC LIMIT 10",
    function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    }
  );
});

app.get("/lastWater", (req, res, next) => {
  connection.query(
    "SELECT * FROM `watering` WHERE iswatering='1' ORDER BY id DESC LIMIT 1",
    function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    }
  );
});

app.get("/upload_sensor_data", (req, res, next) => {
  console.log(req.query);
  console.log(req.query, "the query");
  var temp = req.query.temp;
  var hum = req.query.hum;
  var moist1 = req.query.moist1;
  var moist2 = req.query.moist2;
  var iswatering = req.query.iswatering;

  if (temp == 0 || temp < -50 || hum <= 0 || moist1 == 0 || moist2 == 0) {
    res.send("Data saved successfully");
    return;
  }

  var post = {
    temperature: temp,
    humidity: hum,
    moisture1: moist1,
    moisture2: moist2,
  };
  var query = connection.query(
    "INSERT INTO sensor SET ?",
    post,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
  console.log(query.sql);

  post = {
    iswatering: iswatering,
  };
  query = connection.query(
    "INSERT INTO watering SET ?",
    post,
    function (err, result, fields) {
      if (err) throw err;
    }
  );
  console.log(query.sql);
  res.send("Data saved successfully");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
