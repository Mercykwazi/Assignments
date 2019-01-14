
const pg = require('pg');
const connectionString = 'postgres://postgres:Gugulethu@localhost:5432/storage';
const client = new pg.Client(connectionString);
const generateToken = require("../creat-token")
client.connect()
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var { authMiddleware } = require('../../config/passport')
const { jwtCheck } = require('../../config/jwt-check')

module.exports = function businessRoutes(app) {
    app.post('/business', authMiddleware, async (req, res) => {
        const decodedValues = req.decoded
        const insertBusiness = 'INSERT INTO business ( business_name, contact_name,contact_email, contact_telephone)VALUES($1,$2,$3,$4)';
        const businessDetails = [req.body.businessName, req.body.contactName, req.body.email, req.body.phoneNumber];
        try {
            var result = await client.query(insertBusiness, businessDetails)

            res.status(201).send(decodedValues).end();
        } catch (error) {
            res.status(203).end();
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

    app.post('/location', authMiddleware, async (req, res) => {

        const businessId = await client.query('SELECT id FROM business WHERE business_name=$1', [req.body.business]);
        const insertLocations = 'INSERT INTO location(address1,address2,country,business_id)VALUES($1,$2,$3,$4)';
        const locationDetails = [req.body.address1, req.body.address2, req.body.country, businessId.rows[0].id]
        try {
            const Results = await client.query(insertLocations, locationDetails)
            res.status(201).end()
        } catch (err) {
            console.log(err);
            res.status(203).end()
        }
    })

    app.get('/location', authMiddleware, async (req, res, info) => {
        try {
            var allLocations = await client.query("SELECT * FROM location", (err, result) => {
                res.send(result)
                res.status(200).end()
            })

        } catch (error) {
            console.log(error);
        }
    })

    app.post('/block', authMiddleware, async (req, res) => {
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


    app.post('/unitType', authMiddleware, async (req, res) => {
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

    app.get('/unitType/', authMiddleware, async (req, res) => {
        try {
            var unitTypeDetails = await client.query('SELECT * FROM unit_type')
            res.send(unitTypeDetails).status(201).end()
        } catch (error) {
            console.log(error);
            res.status(500).end();
        }
    })

    app.get('/units', authMiddleware, async (req, res) => {
        try {
            var unitsDetails = await client.query('SELECT * FROM unit')
            res.send(unitsDetails).status(201).end()
        } catch (err) {
            console.log(err)
            res.status(500)
        }
    })

    app.post('/units', authMiddleware, async (req, res) => {
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
    app.get('/selectLocation/:selectedLocation', async (req, res) => {
        var blockDetails = await client.query('SELECT unit_type.name,unit_type.length,unit_type.width,unit_type.height FROM unit_type INNER JOIN unit on unit_Type.id=unit.unit_Type_id INNER JOIN block on unit.block_id= block.id INNER JOIN location on block.location_id=location.id WHERE location.id=$1', [req.params.selectedLocation])
        var finalBlockDetails = blockDetails.rows
        try {
            res.send(finalBlockDetails).status(201).end()
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    })
    app.post("/reserved", async (req, res) => {
        var customerDetails = await client.query('SELECT id  FROM customer where contact_email =$1', [req.body.decodedToken.email])
        var finalCustomerDetails = customerDetails.rows[0].id
        var reservedDetails = 'INSERT INTO purchase_units(customer_id,unit_id) VALUES($1,$2)';
        try {
            var results = await client.query(reservedDetails, [finalCustomerDetails, req.body.id])
            res.send(results).status(201)
        } catch (err) {
            console.log("err", err)
            res.status(500).end()
        }
    })

    app.get("/reserved/:decodedToken", async (req, res) => {
        var user = await client.query('SELECT id FROM public.customer where contact_email=$1', [req.params.decodedToken])
        var userDetails = user.rows[0].id
        var unitName = await client.query('SELECT unit.name FROM purchase_units inner join unit on purchase_units.unit_id=unit.id where customer_id=$1', [userDetails])
        var reservedRooms = unitName.rows
        try {
            res.send(reservedRooms).status(201)
        } catch (err) {
            console.log("err", err)
            res.status(500).end()
        }
    })


    app.get('/selectUnit/:selectedUnitType', async (req, res) => {
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
            return { name: units.name, id: units.id }
        })
        try {
            res.send(allAvailableUnits).status(201).end()

        } catch (error) {
            res.status(500).end()
        }
    })
    app.post('/registerBusiness', async (req, res) => {
        var hashedPassword;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, async function (err, hash) {
                hashedPassword = hash
                const insertCustomerDetails = 'INSERT INTO businessOwner(contact_name,contact_email,password) VALUES($1,$2,$3)';
                const customerDetails = [req.body.name, req.body.email, hashedPassword]
                try {
                    var results = await client.query(insertCustomerDetails, customerDetails);
                    var token = generateToken({ name: req.body.name, email: req.body.email }, "businessOwner");
                    res.send(token).status(201).end()
                } catch (err) {
                    console.log(err);
                    res.status(500).end()

                }
            });
        });
    })

    app.post('/logIn', (req, res) => {
        var results = generateToken({ email: req.body.email }, "businessOwner")
        passport.authenticate('businessLogIn', { session: true }, (err, user, info) => {
            if (err) {
                res.status(401).json(info).end();
            }
            if (user) {
                res.send(results).end()
            } else {
                res.status(401).end();
            }
        })(req, res);
    })

    //   app.get('/logout', function(req, res, next) {
    //     console.log('what is loged out',req,res)

    //     if (req.session) {

    //       req.session.destroy(function(err) {
    //         if(err) {
    //           return next(err);
    //         } else {
    //           return res.redirect('/');
    //         }
    //       });
    //     }
    //   });


}








