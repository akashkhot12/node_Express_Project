const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);



app.listen(5000,()=>{
    console.log("server is started");
});