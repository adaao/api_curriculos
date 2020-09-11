const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
   useUnifiedTopology: true, 
   useFindAndModify: false,
   useNewUrlParser: true,
   useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
   console.log('Mongoose default connection is open');
});

db.on('erro', err => {
   console.log(`Mongoose default connection ocurred\n${err}`);
});

db.on('disconnected', () => {
   console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
   db.close(() => {
      console.log('Mongoose default connection is disconnected due to application termination.');
      process.exit(0);
   });
});

//Load mondels
const Candidate = require('./models/candidate');

//Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const candidateRoutes = require('./routes/candidate-routes');
app.use('/candidate', candidateRoutes);

module.exports = app;