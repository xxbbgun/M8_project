const axios = require('axios');
const user = require("../models/user");
const jwt = require("jsonwebtoken");
module.exports = {
    facebook: async (req, res, next) => {
        try {
            const email = req.body.user.email
            const response = await axios({
                method: 'post',
                url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=587112042632028
                    &client_secret=4ebdd0d748cc1976b3199bb8cb8d32e6&fb_exchange_token=${req.body.user.accessToken}`
            })
            const result = response.data
            const Auth = await axios({
                method: 'get',
                url: ` https://graph.facebook.com/me?access_token=${result.access_token}`
            })
            if (Auth) {
                let find = await user.findOne({ email })//หาในdatabase
                if (find) {//ถ้ามีก็จะsign token
                    const token = jwt.sign({ _id: find._id }, 'id_key_account', { expiresIn: '1d' }) //เวลาlogin 1วัน
                    const { _id, name, email } = find;
                    res.status(200).json({ token, user: { _id, name, email } })
                } else {//ถ้าsignin แล้วไม่มีในdatabase จะaddเข้าdatabaseให้

                    let users = new user({ name: Auth.data.name, email, type_account: "Facebook" })
                    console.log(users)
                    await users.save(async (err, data) => {
                        if (err) {
                            return res.status(400).json({ error: "Something went worng..." })
                        }
                        const token = jwt.sign({ _id: data._id }, 'id_key_account', { expiresIn: '1d' })
                        const { _id, name, email } = users;
                        res.status(200).json({ token, user: { _id, name, email } })
                    });
                }

            } else {

            }
        } catch (err) {

        }
    }
}