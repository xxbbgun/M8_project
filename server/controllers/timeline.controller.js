const post = require("../models/post");
module.exports = {
    post: async (req, res) => {
        const { text, image } = req.body
        const data = { text, image }
        const postTweet = new post(data);
        await postTweet.save(async (err, data) => {
            if (err) {
                res.status(400).json("Tweet error!");
                console.log(err)
            } else {
                res.status(200).json({ success: true, data: data });
            }
        })
    },
    getpost: async (req, res) => {
        try {
            const posts = await post.find({})

            if (!post) {
                return res.status(404).send()
            }

            res.send(posts)

        } catch (e) {
            res.status(400).send()
        }
    }
}