const mongoose = require("../config/database");
const Schema = mongoose.Schema
const jwt = require("jsonwebtoken");

const login = new Schema({
    name: String,
    email: {type: String , unique: true},
    password: String
})

const Login = mongoose.model("login", login)

module.exports = Login