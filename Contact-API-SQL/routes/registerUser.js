const express = require('express');
const app =express();
const registerRouter = express.Router()
const {Pool} = require('pg');
const pool = require('../server');

registerRouter.post('/create',async(req,res)=>{
    try {
        const { name, email } = req.body;
        const client = await pool.connect();
        const result = await client.query('INSERT INTO Contacts (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        client.release();
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = registerRouter;
    