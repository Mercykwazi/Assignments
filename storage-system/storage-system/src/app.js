
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

app.post('/business', (req, res) => {
  try {
    const registryDetails = client.query(`INSERT INTO business( business_name, contact_name,contact_email, contact_telephone)VALUES('${req.body.businessName}','${req.body.contactName}','${req.body.phoneNumber}','${req.body.email}')`)
 console.log(registryDetails);
 
  } catch (err) {
    console.log(err)
  }
}
);
app.get('/business', (req, res) => {
  client.query('SELECT * FROM business', (err, result) => {
    res.send(result)
    client.end()
  })

})
// app.post('/location', (req, res) => {
//   try{
// const locationDetails=client.query(`INSERT INTO location(address1,address1)VALUES()`)
//   }catch(err){

//   }
//   var locationDetails = {
//     firstAddress: req.body.address1,
//     secondAddress: req.body.address2,
//     blockName: req.body.block
//   }
// })
app.get('/location', (req, res) => {
  console.log("location wise");

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