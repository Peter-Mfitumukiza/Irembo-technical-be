require('dotenv').config();

const express = require('express');
const cors  = require('cors');
const authRoutes = require('./routes/auth.routes');

// connect to database
require('./config/db');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Awesome Url Shortner!');
});

const port = process.env.PORT|| 5008;

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});