const post = require("../models/post");
const passport = require("passport");

module.exports = {

    post: async (req, res, next) => {
        try {
            passport.authenticate("jwt", async (err, user) => {
                if (err) return next(err);
                if (user) {
                    const { text, image } = req.body
                    const data = { text, image }
                    const postTweet = new post(data);
                    await postTweet.save(async (err, data) => {
                        if (err) {
                            res.status(400).json("Tweet error!");
                        } else {
                            res.status(200).json({ success: true, data: data });
                        }
                    })
                } else {
                    res.status(400).json("Not found user please login.");
                }
            })(req, res, next);
        } catch (e) {
            res.status(400).send(e)
        }



},
    getpost: async (req, res, next) => {

        try {
            passport.authenticate("jwt", async (err, user) => {
                if (err) return next(err);
                if (user) {
                    const posts = await post.find({})
                    if (!post) {
                        return res.status(404).send()
                    }
                    res.send(posts)
                } else {
                    res.status(400).json("Not found user please login.");
                }
            })(req, res, next);
        } catch (e) {
            res.status(400).send(e)
        }
    }
}