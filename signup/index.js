const express = require('express');
const app = express();
const linkdb = require('./connections');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.json());



// get details 

app.get('/', async (req, res) => {
    let result = await linkdb();
    let db = await result.find().toArray();
    res.send(db)
})

app.post('/addDetails', async (req, res) => {
    let result = await linkdb();
    const { username, email, password } = req.body;
    try {
        // email,password,username is required
        if (!req.body.email) {
            return res.status(400).json({ error: 'Email is required' });
        } else if (!req.body.username) {
            return res.status(400).json({ error: 'username is required' });
        } else if (!req.body.password) {
            return res.status(400).json({ error: 'password is required' });
        }
        // Check if user with the provided email already exists
        const existingUser = await result.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }


        // Insert the new user
        await result.insertOne({ username, email, password });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


app.listen(3000, () => {
    console.log("server is up on port number 3000");
})