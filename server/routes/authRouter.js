const {Router} = require('express');
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/register', async (req, res) => {
    const profilePic = req.body.profilePic || '';
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_CRYPTO).toString(),
        profilePic: profilePic
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user)
    } catch (err) {
        console.log(err)
    }
});
//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user ){
            res.status(401).json('Wrong password or username!');
            return;
        }
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_CRYPTO);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if(originalPassword !== req.body.password){
            res.status(401).json('Wrong password or username!');
            return;
        }
        const accessToken = jwt.sign(
            { id:  user._id, isAdmin: user.isAdmin},
            process.env.JSON_KEY,
            { expiresIn: '5d' });
        const {password, ...info} = user._doc;
        res.status(200).json({...info,accessToken});
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router