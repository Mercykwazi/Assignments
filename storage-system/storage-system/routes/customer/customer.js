var uid = require('uid2');
var util = require('util');
const cors = require("cors");
var bodyParser = require("body-parser");
const pg = require('pg');
const connectionString = 'postgres://postgres:Gugulethu@localhost:5432/storage';
const client = new pg.Client(connectionString);
client.connect()
const jwt = require('jsonwebtoken');
const passport = require("passport");
const bcrypt = require('bcrypt');
const generateToken = require("../creat-token")
const saltRounds = 10;


module.exports = function customerRoutes(app) {
  app.post('/customer',  passport.authenticate('jwt', {session: true}), (req, res) => {

    var hashedPassword;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.password, salt, async function (err, hash) {
        hashedPassword = hash
        const insertCustomerDetails = 'INSERT INTO customer(contact_name,contact_email,password) VALUES($1,$2,$3)';
        const customerDetails = [req.body.name, req.body.email, hashedPassword]
        try {
          var results = await client.query(insertCustomerDetails, customerDetails)
          var token = generateToken({ name: req.body.name, email: req.body.email });
          res.send(token).status(201).end()
        } catch (err) {
          console.log(err);
          res.status(500).end()
        }
      });
    });
  })

  app.post('/signIn', (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) {
        res.status(401).json(info).end();
      }
      if (user) {
        res.status(200).json(info).end();
      } else {
        res.status(401).json(info).end();
      }
    })(req, res);
  })

}