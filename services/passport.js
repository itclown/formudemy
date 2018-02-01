const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/key');


passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refresToken, profile, done) => {
        console.log('Access token', accessToken);
        console.log('Refresh token', refresToken);
        console.log('Profile', profile);
    }
    )
);