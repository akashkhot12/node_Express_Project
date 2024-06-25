const express = require("express");
const connection = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Akash2020";

// register new users - signUp
// const register = async (req, res) => {
//   const { firstname, lastname, username, password, email, phone } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await connection.query(
//       "INSERT INTO Users (firstname, lastname, username, password, email, phone) VALUES (?, ?, ?, ?, ?, ?)",
//       [firstname, lastname, username, hashedPassword, email, phone]
//     );
//     if (result) {
//       res.status(201).json({ message: "User registered successfully." });
//       return result;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const register = async (req, res) => {
//     // existing user or not

//     const { firstname, lastname, username, password, email, phone } = req.body;

//     try {
//         const existingUser = await connection.query(
//             "SELECT * FROM Users WHERE email = ? OR phone = ?",
//             [email, phone]
//         );
//         if (!existingUser) {
//             // hashed password
//             const hashedPassword = await bcrypt.hash(password, 10);

//             // user create
//             const result = await connection.query("INSERT INTO Users (firstname, lastname, username, password, email,phone) VALUES (?, ?, ?, ?, ?, ?)", [firstname, lastname, username, hashedPassword, email, phone]
//             );
//             return res.status(201).json({ message: "User registered successfully." });

//         }
//         return res.status(400).json({ message: "user already exist." });
//     } catch (error) {
//         console.log(error);
//         return res.status(201).json({ message: "something went wrong." });
//     }
// };

const register = async (req, res) => {
    const { firstname, lastname, username, password, email, phone } = req.body;

    try {
        // Check if user already exists by email or phone
        const existingUser = await connection.query(
            "SELECT * FROM Users WHERE email = ?",
            [email]
        );

        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into database
        const insertQuery = "INSERT INTO Users (firstname, lastname, username, password, email, phone) VALUES (?, ?, ?, ?, ?, ?)";
        const result = await connection.query(insertQuery, [firstname, lastname, username, hashedPassword, email, phone]);

        // Check if insertion was successful
        if (result) {
            return res.status(201).json({ message: "User registered successfully." });
        } else {
            return res.status(500).json({ message: "Failed to register user." });
        }
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Something went wrong." });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const result = await connection.query("SELECT * FROM Users", (err, result) => {
            return res.status(200).json({ message: result });
        });
    }
    catch {
        return res.status(404).json({ message: "something went wrong." });
    }

};

module.exports = { register, getAllUsers };
