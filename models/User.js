const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    nom: String
}, { collection : 'users'});

module.exports = mongoose.model('User', userSchema, 'users');