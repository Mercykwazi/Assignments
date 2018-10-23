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






app.get('/business', async(req, res) => {
  try {
    var businessDetails =  await client.query('SELECT id,business_name  FROM business', (err, result) => {
      res.send(result)
      res.status(2001).end()
    })
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})
app.post('/location', async(req, res) => {
  const insertLocations = 'INSERT INTO location(address1,address2,country)VALUES($1,$2,$3)';

  const locationDetails = [req.body.address1, req.body.address2, req.body.country]
  console.log("loc",locationDetails);
  try {
    const Results = await client.query(insertLocations, locationDetails)
    res.status(302).end()
    console.log('res',Results);
    
  } catch (err) {
    console.log(err);
    res.status(500).end()
  }
})


// async function getAllBusinessWithLocations() {
//   const businessNames = await client.query(`SELECT name FROM business INNER JOIN locations on business.id = locations.business_id;`);
//   return businessNames.rows;
// };
// async function insertBusinessLocation(businessName, country, address1, address2, address3) {
//   const businessId = await client.query(`SELECT id FROM business WHERE name = $1;`, [businessName]);
//   await client.query("INSERT INTO locations(country, address1,address2, address3, business_id) VALUES ( $1,$2,$3,$4,$5 )", [country ? country : null, address1 ? address1 : null, address2 ? address2 : null, address3 ? address3 : null, businessId.rows[0].id > 0 ? businessId.rows[0].id : null]);
// };
// async function insertBusinessInfo(businessName, contactName, telephone, email) {
//   var addingBusiness = await client.query("INSERT INTO business(name, contact_name, contact_number, contact_email) VALUES ($1,$2,$3,$4)", [businessName ? businessName : null, contactName ? contactName : null, telephone ? telephone : null, email ? email : null]);
//   return addingBusiness;}





app.get('/location', (req, res) => {
  try {

    var allLocations = client.query('SELECT location FROM business INNER JOIN location  ON business.id=location.business_id', (err, result) => {
      res.send(result)
      console.log('res', result);
    })
  } catch (error) {
    console.log(error);

  }
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