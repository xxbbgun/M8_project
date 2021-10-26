const mongoose = require("../config/database");
const Schema = mongoose.Schema

const post = new Schema({
    text: String,
    image: String
})

const Post = mongoose.model("post", post)

module.exports = Post