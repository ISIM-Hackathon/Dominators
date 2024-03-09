const mongoose = require('mongoose')


 const CourseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true, 
        unique : true
    },
    duration : {
            type : String,
            required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    video : {
        type : String,
        required : true
    }
   
 })

 const Course = mongoose.model("course" , CourseSchema)
 module.exports = Course