const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users')

//Put user ID into a cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//Receive the ID stored in the cookie and retrieve corresponding user
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, 
async (accesToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id})
    if (existingUser) {
        return done(null, existingUser)
    } 
    const user = await User({ googleId: profile.id}).save()
    done(null, user);
}));