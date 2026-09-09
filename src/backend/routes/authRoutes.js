const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.js");

const JWT_SECRET =
    process.env.JWT_SECRET || "my_super_secret_key";


// =========================
// REGISTER
// =========================

router.post("/register", async (req, res) => {

    try {

             console.log("REGISTER BODY:", req.body);
        const { name, email, password } = req.body;


        if (!name || !email || !password) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        // Check existing user

        const existingUser = await User.findOne({
            email: email
        });


        if (existingUser) {

            return res.status(409).json({
                message: "User already exists"
            });

        }


        // Hash password

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        // Create user

        const user = new User({

            Name: name,

            email: email,

            password: hashedPassword

        });


        await user.save();


        res.status(201).json({

            message: "User registered successfully"

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Registration failed",

            error: error.message

        });

    }

});


// =========================
// LOGIN
// =========================

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;


        // Find user

        const user = await User.findOne({
            email: email
        });


        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }


        // Compare password

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );


        if (!passwordMatch) {

            return res.status(401).json({

                message: "Wrong password"

            });

        }


        // Create JWT

        const token = jwt.sign(

            {
                userId: user._id.toString(),

                email: user.email
            },

            JWT_SECRET,

            {
                expiresIn: "1h"
            }

        );


        res.status(200).json({

            message: "Login successful",

            token: token,

            user: {

                id: user._id,

                name: user.Name,

                email: user.email

            }

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Login failed",

            error: error.message

        });

    }

});


module.exports = router;