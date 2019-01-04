/*
 * Express Example
 */

// Dependencies
const express = require('express');
const app = express();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const hello =  require('./hello');
const usersRoutes = require('./routes/user');
const bookRoutes = require('./routes/books');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const PORT = process.env.PORT || 5000
const fileUpload = require('express-fileupload');


//  Starting MongoDB connection
//mongoose.connect('mongodb://admin:admin1234@ds127624.mlab.com:27624/camp', { useNewUrlParser: true });
mongoose.connect('mongodb://admin:ADMIN1992@ds063158.mlab.com:63158/bookstore',{useNewUrlParser: true})

//  To Check if the connection works fine or not
mongoose.connection.on('connected', () => {
  console.log('\x1b[36m%s\x1b[0m', 'mongo has been connected...');
});

// MiddleWare
app.use(express.json());
// Custom MiddleWare thats do nothing just to made the MiddleWare clear
// app.use(hello);
app.use(fileUpload());

// For serving images and other static data
app.use(express.static('public'));
// Route MiddleWare for any route that start with (/api/user)
app.use('/api/user', usersRoutes);
app.use('/api/book', bookRoutes);

// Home Router
app.get('/', (req, res) => {
  const token = jwt.sign({"name":"Hamdon", "age": 24}, 'key');
  res.send(token);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
