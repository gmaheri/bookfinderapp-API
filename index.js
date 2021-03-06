const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')
const connectDB = require('./config/db');

//load env var
dotenv.config({path : './config/config.env'});

//connect to DB
connectDB();

//intialise express
const app = express();

//enable cors
app.use(cors());

//Bodyparser
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.use('/api/books',require('./routes/routes'));
app.use('/api/books/:id',require('./routes/routes'));



app.listen(PORT || 3200,() => {
  console.log(`Server is up and running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
})
