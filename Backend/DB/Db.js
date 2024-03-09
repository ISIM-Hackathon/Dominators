const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1/Anjali-07', {useNewUrlParser : true, useUnifiedTopology : true })

const db = mongoose.connection


db.once('open' , () =>{ console.log("Successfully Conected With MongoDB")})
db.on('error' , () =>{console.log("Not Connected With Dtabase")})




module.exports = db