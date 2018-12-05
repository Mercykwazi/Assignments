const passport = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
const pg = require('pg');
const bcrypt = require('bcrypt');
const connectionString = 'postgres://postgres:Gugulethu@localhost:5432/storage';
const client = new pg.Client(connectionString);
client.connect()

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async function (email, password, cb) {
        var customerDetails = await client.query('SELECT * FROM customer WHERE contact_email = $1;', [email])
        if (customerDetails.rowCount > 0) {
            var passwordsMatch = await bcrypt.compare(password, customerDetails.rows[0].password);
            if (passwordsMatch) {
                return cb(null, customerDetails.rows[0], { message: 'Logged In Successfully' });
            }
        }
        return cb(null, false, { message: 'Incorrect email or password.' });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromHeader("authorization"),
    secretOrKey: 'mercy'
},
    async function (jwt_payload, done) {
        var availableUsers = await client.query('SELECT contact_name,contact_email FROM customer WHERE contact_name= $1 AND contact_email=$2', [jwt_payload.name, jwt_payload.email])
        console.log('jwt_payload :', availableUsers.rows[0]);
        var user = availableUsers.rows[0]
        try {
            if (user.contact_name=== jwt_payload.name&& user.contact_email===jwt_payload.email) {
                console.log("found user",user);
                return done(null, user);
            } else {
                console.log("cannot find user");
                return done(null, false);
            }
        } catch (e) {
console.log('errr',e)
        }
         // });


    }



));

