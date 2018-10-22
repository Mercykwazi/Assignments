// import { error } from "util";

var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var port = 3003;
var app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
const pg = require('pg');
const connectionString = 'postgres://postgres:Gugulethu@localhost:5432/storage';
const client = new pg.Client(connectionString);
client.connect()


app.post('/business', async (req, res) => {
  const insertBusiness = 'INSERT INTO business ( business_name, contact_name,contact_email, contact_telephone)VALUES($1,$2,$3,$4)';
  const businessDetails = [req.body.businessName, req.body.contactName, req.body.phoneNumber, req.body.email];
  try {
    var result = await client.query(insertBusiness, businessDetails)
    res.status(201).end();

  } catch (error) {
    res.status(500).end();
  }
});
app.get('/business', (req, res) => {
  try {
    var businessDetails = client.query('SELECT id,business_name  FROM business', (err, result) => {
      res.send(result)
      res.status(2001).end()
    })
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})
app.post('/location', (req, res) => {
  try {
    const locationDetails = client.query(`INSERT INTO location(address1,address1,country)VALUES('${req.body.address1}','${req.body.address2}','${req.body.country}')`)
  } catch (err) {
    console.log(err);
  }
})
app.get('/location', (req, res) => {
  var allLocations = client.query('SELECT * FROM location', (err, result) => {
    res.send(result)
    console.log('res', result);

  })
  //SELECT unit FROM business INNER JOIN location ON business.id=location.business_id INNER JOIN block ON location.id=location_id INNER JOIN unit ON block.id=block_id WHERE business_name='storage';

  console.log("all l", allLocations);
})
app.post('/unitType', (req, res) => {
  var unitType = {
    storageType: req.body.storageType,
    length: req.body.length,
    width: req.body.width,
    height: req.body.height,
    storageName: req.body.storageName

  }
})
app.get('/unitType', (req, res) => {
})
app.listen(port, () => {
  console.log("server running on localhost:3003 ");
});