const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

//Defining App
const app = express();

//defining Port
const PORT = process.env.port || 8000

app.get('/', (req, res) => {
    console.log('This is server Home');
});

//listen to port
app.listen(PORT, () => {
    console.log('App is listening on poort:' + PORT);
});