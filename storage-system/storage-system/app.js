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

app.get('/business', async (req, res) => {
  try {
    var businessDetails = await client.query('SELECT id,business_name  FROM business', (err, result) => {
      res.send(result)
      res.status(201).end()
    })
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})
app.post('/location', async (req, res) => {

  const businessId = await client.query('SELECT id FROM business WHERE business_name=$1', [req.body.business]);
  const insertLocations = 'INSERT INTO location(address1,address2,country,business_id)VALUES($1,$2,$3,$4)';
  const locationDetails = [req.body.address1, req.body.address2, req.body.country, businessId.rows[0].id]
  try {
    const Results = await client.query(insertLocations, locationDetails)
    res.status(201).end()
  } catch (err) {
    console.log(err);
    res.status(500).end()
  }
})


app.post('/block', async (req, res) => {
  console.log('req', req.body);
 const businessId = await client.query('SELECT id FROM location WHERE business_name=$1', [req.body.businessName]);
  console.log("bus", businessId)
  const insertBlocks = 'INSERT INTO block(name,location_id)VALUES($1,$2,)';

  const blocksDetails = [req.body.blockName,businessId[0].id]
  console.log("block", blocksDetails)
  try {
 const Results = await client.query(insertBlocks, blocksDetails)
    res.status(201).end()
  } catch (err) {
    console.log(err);

  }
})

// app.get('/location', async (req, res) => {

//   try {
//     var allLocations = await client.query("SELECT address1,address2,country FROM location", (err, result) => {
//       res.send(result)
//       console.log('this is the res', res);

//     })

//   } catch (error) {
//     console.log(error);

//   }
// })
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