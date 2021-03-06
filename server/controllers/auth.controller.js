const axios = require('axios');
const user = require("../models/user");
const login = require("../models/login");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
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
            if (Auth) {//ยืนยันตัวตน
                let find = await user.findOne({ email })//หาในdatabase
                if (find) {//ถ้ามีก็จะsign token
                    const token = jwt.sign({ _id: find._id }, process.env.JWTPRIVATEKEY, { expiresIn: '1d' }) //เวลาlogin 1วัน
                    const { _id, name, email } = find;
                    res.status(200).json({ token, user: { _id, name, email } })
                } else {//ถ้าsignin แล้วไม่มีในdatabase จะaddเข้าdatabaseให้

                    let users = new user({ name: Auth.data.name, email, type_account: "Facebook" })
                    await users.save(async (err, data) => {
                        if (err) {
                            return res.status(400).json({ error: "Something went worng..." })
                        }
                        const token = jwt.sign({ _id: data._id }, process.env.JWTPRIVATEKEY, { expiresIn: '1d' })
                        const { _id, name, email } = users;
                        res.status(200).json({ token, user: { _id, name, email } })
                    });
                }
            } else {

            }
        } catch (err) {
            res.status(500).json(error);
        }
    },
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body
            const hashPassword = bcrypt.hashSync(password, 12);
            const data = { name, email, password: hashPassword }
            const newUser = new login(data);
            await newUser.save(async (err) => {
                if (err) {
                    res.status(400).json("Username that other User has already exist");
                    console.log(err)
                } else {
                    const token = jwt.sign({ _id: data }, process.env.JWTPRIVATEKEY, { expiresIn: '1d' })
                    res.status(200).json({ token, newUser });
                }
            })
        }
        catch (err) {
            res.status(500).json(error);
        }

    },
    signin: async (req, res) => {
        try {
            //Checking if the email exists
            const user = await login.findOne({ email: req.body.email });
            if (!user) {
                res.status(400).json("Email is not found!");
            };
            //Password is correct
            const password = req.body.password;
            const checkPassword = await bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                //Shows user information but doesn't show password
                const token = jwt.sign({ user }, process.env.JWTPRIVATEKEY, { expiresIn: '1d' });
                res.status(200).json({ token, user });
            } else {
                res.status(400).json("Incorrect password!");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

}