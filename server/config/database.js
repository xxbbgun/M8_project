const db = require('mongoose');
db.connect("mongodb://localhost:27017/database",{ useNewUrlParser: true })
 module.exports = db;