const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

//Middleware for Bodyparser
app.use(bodyParser.json());

//Mongo DB config
const db = require('./config/apiKeys').mongoURI;

//Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

//Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));