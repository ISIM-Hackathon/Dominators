
const CourseSchema = require('../Schemas/Courses')


exports.AddCourses = (req,res)=>{
    const {name , duration , description , image , video} = req.body

    CourseSchema.insertMany({name : name , duration : duration , description : description , image : image , video : video }).then((result)=>{
        if(result.length > 0)
        {
            res.status(200).send({status : 200 , message : "Course Added Successfully"})
        }
        else
        {
            res.status(400).send({status : 400 , message : "Failed to Add Course || Please try Again "})        
        }
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status : 500 , message : "Something went wrong || Please Try Again" })
    })

}