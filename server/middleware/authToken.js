const jwt = require("jsonwebtoken");
const login = require("../models/login");
const facebook = require("../models/user");
const authToken = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(authHeader,process.env.JWTPRIVATEKEY)
        if(user){
            try{
                const checkFacebook = await facebook.findById(user._id)
                if(checkFacebook){
                    req.user = checkFacebook
                    next();
                }
                const checkUser = await login.findById(user._id)
                if(checkUser){
                    req.user = checkUser
                }
                
            }catch(error){
                res.status(400).send("User not found");
            }
        }
       

    }catch (error) {
        res.status(400).send("Invalid token");
    }
    next();
}

module.exports = authToken;