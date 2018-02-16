const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = require('../models/User');


passport.serializeUser((user, done) => {
    console.log('serialize ', user.id);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log('deserialize ', id);
    try {
        const user = await User.findOne({"_id": id});
        return done(null, user)
    } catch(err) {
        return done(null, null);
    }

});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refresToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        if(existingUser) {
            return done(null, existingUser);
        }
        const user = await (new User({ googleId: profile.id, nom: profile.displayName })).save();
        done(null, user);
    }
    )
);

