const db = require("../config/database");
const Schema = db.Schema;

const Books = require("../json/book.json");

const book = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    imageUrl: String,
    type: String,
    author: String,
    status: String
});

const Book = db.model("books", book); //สร้างตารางbookจากschema book

const saveBook = async () => {
    if (0 == (await Book.find())) await Book.insertMany(Books);

};
saveBook();

module.exports = Book;