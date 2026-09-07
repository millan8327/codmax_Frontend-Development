const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({
                Name:name,
                email: email,
                password: password
        });
        await user.save();


        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
});

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    if (user.password !== password) {
        return res.status(401).json({
            message: "Wrong password"
        });
    }

    res.status(200).json({
        message: "Login successful",
        user: user
    });
});


module.exports = router;
