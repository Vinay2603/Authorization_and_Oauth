require("dotenv").config()

const passport = require("passport")

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const User = require("../models/user")

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://yourdomain:2233/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
  
     
        console.log("accessToken,  refreshToken, profile",accessToken, refreshToken, profile)
        return done(err, "user");
   
  }
));

module.exports = passport