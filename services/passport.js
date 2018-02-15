const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/key');

const User = require('../models/User');


passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refresToken, profile, done) => {
        console.log('Access token', accessToken);
        console.log('Refresh token', refresToken);
        console.log('Profile', profile);

        /*User.findOne({ googleId: profile.id }).then(existingUser => {
            if(existingUser) {
                done(null, existingUser);
            }
            else {
                new User({ googleId: profile.id }).save().then(user => done(null, user));
            }
        });*/

        return done(null, {success: true});
    }
    )
);