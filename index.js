const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //lasts 30 days
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.use('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
})

app.get('/api/user', (req, res) => {
    res.send(req.user)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);