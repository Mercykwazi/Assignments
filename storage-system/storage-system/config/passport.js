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
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'mercy'
},
function (jwtPayload, cb) {
    console.log('what is jwt',jwtPayload)
    // return UserModel.findOneById(jwtPayload.id)
    //     .then(user => {
        //         return cb(null, user);
        //     })
        //     .catch(err => {
            //         return cb(err);
            //     });
        }
    ));
