const book = require("../models/product");

module.exports = {
    show: async (req, res, next) => {
        try {
            res.status(200).json(await book.find());
        } catch (err) {

        }
    },
    add: async (req, res, next) => {
        try {
            let books = new book(req.body) //เอาข้อมูลใหม่ใส่เข้าไป
            await books.save(async (err, data) => {
                if (err) res.status(400).json("Bad Request");
                res.status(200).json(data);
            })
        } catch (err) {

        }
    },
    update: async (req, res, next) => {
        try {
            const { id } = req.params
            let book_update = await book.findByIdAndUpdate(id, req.body, { new: true }) //หาidและupdateข้อมูลตามนี้
            res.status(200).json(book_update);
        } catch (err) {

        }
    },
    deletebook: async (req, res, next) => {
        try {
            const { id } = req.body
            let book_delete = await book.findByIdAndDelete(id)
            const data = { message: "Delete", book_delete }
            res.status(200).json(data);
        } catch (err) {

        }
    }

}