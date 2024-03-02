const bcrypt = require('bcrypt');
const userModel = require('./model');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'LoginApi';
const destroy =require('destroy')

const signup = async (req, res) => {

    // user Exist or not 
    // create a hashed password
    // create a signUp
    // generate token 



    const { userName, email, password } = req.body;
    try {
        const UserExist = await userModel.findOne({ email: email });
        if (UserExist) {
            res.status(400).json({ message: "user already exist" })
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            username: userName,
            email: email,
            password: hashedpassword
        })

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json({ message: result, token: token })

    } catch (error) {
        res.status(500).json({ message: "somethig went wrong", error })
    }
}

const signin = async (req, res) => {
    // validate a user user exist or not 
    // matched password with hashed 
    // create signIn 
    // genrate token 

    const { email, password } = req.body;
    try {
        const UserExist = await userModel.findOne({ email: email });
        if (!UserExist) {
           return res.status(401).res.json({ message: "User not found" })
        }

        const matchedPassword = await bcrypt.compare(password, UserExist.password);

        if (!matchedPassword) {
            return res.status(401).json({ message: "Invalide Credentials " });
        }

        const token = jwt.sign({ email: UserExist.email, id: UserExist._id }, SECRET_KEY);
        res.status(201).json({ message: UserExist, token: token })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "somethig went wrong", error })
    }
}

// logout

const logout = async(req,res)=>{
    res.cookie('cookie', '', {
        expireIn: new Date(Date.now())
    })
    return res.status(200).json({ message: 'User Logout Successfully' })
}


// reset password

const resetPassword = async(req,res,next)=>{
    // check user is exist or not 
    // type password and match with hashed password .
    // then update a new passoword 
    // generate a token

    const{email,password}=req.body;
    try {
        checkPassword
    } catch (error) {
        
    }

}

module.exports = {signup, signin , logout};