const passport = require("passport");//ยืนยันตัวตน
const JWTStrategy = require("passport-jwt").Strategy;//ยืนยันจากtoken
const ExtractJwt = require("passport-jwt").ExtractJwt;

passport.use(passport.initialize());//เปิดใช้งานpassport
passport.use(passport.session());

passport.use(new JWTStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWTPRIVATEKEY },
 (payload, done) => {
    if (payload) {
        done(null, payload);
    } else done(null, false, { message: "Not found user." });
},
),
);
module.exports = passport;
