// .env file configurations
require('dotenv/config');

// importing required modules
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');

// database configurations
// require('./config/database')(mongoose);
require('./config/database');


// importing routes form .routes
const {
  ProjectRoutes
} = require('./routes');

// initializing the app
const app = express();

//  required middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Default server port
app.get('/', (req, res) => {
  res.send('Your server is running');
});

// routes
app.use('/api/v1/projects', ProjectRoutes);

// define the port
const port = parseInt(process.env.PORT, 10) || 3000;

// port listening
app.listen(port, () => {
  try {
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.error(error);
  }
});
