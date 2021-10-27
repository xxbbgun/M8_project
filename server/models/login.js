const mongoose = require("../config/database");
const Schema = mongoose.Schema
const jwt = require("jsonwebtoken");

const login = new Schema({
    name: String,
    email: {type: String , unique: true},
    password: String
})

login.methods.generateAuthenToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
    return token;
};

const Login = mongoose.model("login", login)

module.exports = Login