
var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3003;
var app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send();
  } else { res.status(500).send() }
});
app.listen(port, () => {
  console.log("server running on localhost:3003 ");
});