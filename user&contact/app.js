const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const app = express();
const port = 5000;


app.use(express.json());

app.use('/api/auth',authRoutes );
app.use('/api/users',userRoutes);
app.use('/api/contacts',contactRoutes );



app.listen(port,()=>{
    console.log("server is started");
});