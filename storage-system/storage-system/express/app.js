
var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var port = 3003;
var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
require('./config/passport')
// require('dotenv').config();
require('./routes/creat-token')
const businessRoutes = require('./routes/business/business')
const customerRoutes = require('./routes/customer/customer')
customerRoutes(app);
businessRoutes(app)
app.listen(port, () => {
  // console.log('what is in',process.env.JWT_SECRET);
  console.log("server running on localhost:3003 ");
});