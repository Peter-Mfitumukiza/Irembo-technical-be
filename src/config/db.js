require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(()=>{
        console.log('Connected to MongoDB!');
    })
    .catch((error)=>{
        console.error('Error connecting to DB!', error);
    });