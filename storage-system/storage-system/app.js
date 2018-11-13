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
  const businessDetails = [req.body.businessName, req.body.contactName, req.body.email, req.body.phoneNumber];
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
  const businessId = await client.query('SELECT location.id FROM business INNER JOIN location on business.id = location.business_id WHERE business_name = $1;', [req.body.businessName]);
  const insertBlocks = 'INSERT INTO block(name,location_id)VALUES($1,$2)';
  const blocksDetails = [req.body.blockName, businessId.rows[0].id]
  try {
    const Results = await client.query(insertBlocks, blocksDetails)
    res.send(Results).status(201).end()
  } catch (err) {
    console.log(err);

  }
})
app.get('/block/:businessName', async (req, res) => {
  try {
    var blockDetails = await client.query('SELECT block.name FROM block INNER JOIN location ON block.location_id=location.id INNER JOIN business ON location.business_id=business.id  WHERE business.business_name=$1', [req.params.businessName])
    res.send(blockDetails.rows).status(201).end()
  } catch (error) {
    console.log("error", error);
    res.status(500).end();
  }
})



app.get('/location', async (req, res) => {
  try {
    var allLocations = await client.query("SELECT address1,address2,country FROM location", (err, result) => {
      res.send(result)
    })

  } catch (error) {
    console.log(error);
  }
})

app.post('/unitType', async (req, res) => {
  const insertUnitTypes = 'INSERT INTO unit_type(name,length,width,height)VALUES($1,$2,$3,$4)'
  const unitTypeDetails = [req.body.storageType, req.body.length, req.body.width, req.body.height]
  try {
    var results = await client.query(insertUnitTypes, unitTypeDetails)
    res.send(results)
    res.status(200).end()
  } catch (err) {
    console.log(err);

  }
})

app.get('/unitType/', async (req, res) => {
  try {
    var unitTypeDetails = await client.query('SELECT * FROM unit_type')
    res.send(unitTypeDetails).status(201).end()
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

app.post('/customer', async (req, res) => {
  const insertCustomerDetails = 'INSERT INTO customer(contact_name,surname,contact_email,contact_telephone,password) VALUES($1,$2,$3,$4,$5)';
  const customerDetails = [req.body.name, req.body.surname, req.body.email, req.body.phoneNumber, req.body.password]
  try {
    var results = await client.query(insertCustomerDetails, customerDetails)
    res.send(results).status(201).end()
  } catch (err) {
    console.log(err);
    res.status(500).end()

  }
})

app.post('/units', async (req, res) => {
  var unitTypeId = req.body.foundObject.id
  var blockDetails = await client.query('SELECT block.id FROM business INNER JOIN location on business.id = location.business_id INNER JOIN block on location.id =block.id WHERE business.business_name = $1', [req.body.selectedBusiness])
  var insertUnits = 'INSERT INTO unit (name,block_id,unit_type_id) VALUES ($1,$2,$3)';
  var unitsDetails = [req.body.name, blockDetails.rows[0].id, unitTypeId];
  try {
    var results = await client.query(insertUnits, unitsDetails)
    res.send(results).status(201)
  } catch (err) {
    console.log(err)
    res.status(500).end()

  }

})

app.get('/units', async (req, res) => {
  try {
    var unitsDetails = await client.query('SELECT * FROM unit')

    res.send(unitsDetails).status(201).end()
  } catch (err) {
    console.log(err)
    res.status(500)
  }
})
app.get('/selectUnit/:selectedUnitType', async (req, res) => {
  console.log('what is selected',req.params);
  
  var selectedUnitTypes = req.params.selectedUnitType.split(" ")
  var unitsDetails = await client.query('SELECT * FROM unit')
  var unitTypeDetails = await client.query('SELECT * FROM unit_type')
  var unitType = unitTypeDetails.rows
  var units = unitsDetails.rows;
  var results = unitType.find(item => {
    var returningObjects = item.name === selectedUnitTypes[0] && item.length === selectedUnitTypes[1] && item.width === selectedUnitTypes[2] && item.height === selectedUnitTypes[3]
    return returningObjects
  })
  var allAvailableUnits = units.filter(unit => {
    var foundId = unit.unit_type_id
    if (foundId === results.id) {
      return unit.name
    }
  }).map(units => {
    return units.name
  })
  try {
    res.send(allAvailableUnits).status(201).end()

  } catch (error) {
    res.status(500).end()
  }

})




app.listen(port, () => {
  console.log("server running on localhost:3003 ");
});