const express = require("express");
const cookieSession = require('cookie-session');
require('./services/passport');
const mongoose = require("mongoose");
const keys = require('./config/key');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    }),
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Serveur démarré sur le port : ' + PORT);
});