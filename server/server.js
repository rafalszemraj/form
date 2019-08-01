
const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')

const mongoose = require('mongoose');
require("./models/event"); 


const indexRouter = require('./routes/index');
const app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/events_formapp', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { 
   
    console.log("Can't connect to the database"+ err)
    // throw new Error('Sorry, DB issue: ' + err.message); 
  }
);


const corsOptions = {
  origin: CLIENT_ORIGIN,
  optionsSuccessStatus: 200 
}

 app.use(cors(corsOptions))
 app.use(express.json())
 app.use('/', indexRouter);


app.listen(process.env.PORT || 5000, () => console.log('OK'))