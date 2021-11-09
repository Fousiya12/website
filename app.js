const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import routes
const documentRoute=require('./routes/documents');
app.use('/documents',documentRoute);

//Routes//listening
mongoose.connect("mongodb://localhost:27017/document",() =>{
  console.log ("Database connected");
});

app.listen(3000);