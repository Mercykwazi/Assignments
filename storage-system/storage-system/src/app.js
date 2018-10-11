require('dotenv').config();
var express = require("express");
const Sequelize = require('sequelize');
const cors = require("cors");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3003;
var loggingMiddleware = require("./log-request-middleware")
var jwtCheck = require('./jwt-check');
var app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var {
  domain,
  communicationChannelType,
} = require('./database/models');
const domainRoutes = require('./routes/domain');
const contactRequestRoutes = require('./routes/contact-request');
const adminUserRoutes = require('./routes/admin-user');
const getOptions = require('./routes/options');
const checkRequests = require('./database/check-requests');
domainRoutes(app);
contactRequestRoutes(app);
adminUserRoutes(app);
getOptions(app);
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send();
  } else { res.status(500).send() }
});
app.listen(port, () => {
  console.log("server running on localhost:3003 ");
});