const express = require("express");
require('./services/passport');
const mongoose = require("mongoose");
const keys = require('./config/key');

const app = express();

app.use(passport.initialize());


require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Serveur démarré sur le port : ' + PORT);
});