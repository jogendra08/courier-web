const express = require('express');

const User = require('../models/User');

const router = express.Router();

const { body, validationResult } = require("express-validator");

const bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');
var fetchuser  = require('../middelware/fetchuser');
const JWT_SECRET = 'Harryisagoodb$oy';

//  ROUTE 1 : create a user using: POST "/api/auth/createuser". No login req
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 character').isLength({ min: 5 })
], async (req, res) => {
    let success=false;
    // If there are errors, return bad req and the errors 
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({success, error: error.array() });
    }
    // Check weather the user with email address exists alredy 
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "sorry a user with this email alredy exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 2 : authanticate a user using: POST "/api/auth/login". No login req
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    let success = false;
    // If there are errors, return bad req and the errors 
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success=false
            return res.status(400).json({ error: "Please login with correct credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success=false
            return res.status(400).json({ error: "Please login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true
        res.json({success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})


// ROUTE 3 : Get loggedin user details using: POST "/api/auth/getuser".login req
router.post('/getuser', fetchuser, async (req, res) => {
try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Intenal Server Error");
}
})
module.exports = router