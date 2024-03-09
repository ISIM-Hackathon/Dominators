
const UserSchema = require('../Schemas/Users')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
const OtpSchema = require('../Schemas/Otp')
const CourseSchema = require('../Schemas/Courses')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "",
      pass: "",
    },
  });


exports.getForm = (req,res)=>{

    res.send(
        
        `
        <form  method='POST' action='/test' >
        <input type="checkbox" name="course1" value="Physics"> 
        <br>
        Chemistry --> 
        <input type="checkbox" name="course2" value="Chemistry"> 
        <br> 
        Biology --> 
        <input type="checkbox" name="course3" value="Biology"> 
        <br> 
        Ecology --> 
        <input type="checkbox" name="course4" value="Ecology"> 
        <br>
        <button type='submit' >Check</button>
        </form>
        `
    )
}
exports.verifyOtpAndChangePassword = (req,res)=>{

    const {email , otp , new_pass} =  req.body

    UserSchema.find({email  : email}).then((r1)=>{
        if(r1.length  > 0)
        {
            OtpSchema.find({email  :  email}).then((r2)=>{
                if(r2.length >0)
                {

                        if(r2[0].otp == otp)
                        {

                            let t =  Number(new Date())
                            let tmp =  (t  -  Number(r2[0].time) ) / 1000 

                            if(tmp > 30)
                            {
                                res.status(400).send({status : 400 ,  message  :    "Your OTP Has exprired || Pelase Generate a new OTP ):"})

                            }
                            else
                            {


                                bcrypt.genSalt(10 ,  function(err, salt){
                                    if(err)
                                    {
                                        res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

                                    }
                                    else
                                    {
                                        bcrypt.hash(new_pass ,  salt, function(err , hash){
                                            if(err)
                                    {
                                        res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

                                    }
                                    else
                                    {

                                        UserSchema.updateOne({email : email} ,  {$set : {password : hash} }).then((r3)=>{
                                            if(r3.modifiedCount == 1)
                                            {


                                                OtpSchema.deleteOne({email : email}).then((r4)=>{
                                                    if(r4.deletedCount == 1)
                                                    {

                                                        transporter.sendMail({
                                                            from: '"Node-Web 👻" <anjalibari09@gmail.com>', // sender address
                                                            to: email, // list of receivers
                                                            subject: "Password Changes", // Subject line
                                                            text: "Hello" + r1[0].name, // plain text body
                                                            html: `<h3>Your Password has Reset Just Now👻 </h3>`, // html body
                                                          }).then((m_res)=>{
                                                            if(m_res.messageId)
                                                            {
                                                                res.status(200).send({status : 200 ,  message  :    "Your Password Has Reset Successfully "})
                                                            }
                                                            else
                                                            {
                                                                res.status(400).send({status : 400 ,  message  :   "Something Went Wrong || Please Try Again || ):"})
                                    
                                                            }
                                    
                                                          }).catch((err)=>{
                                                            res.status(400).send({status : 400 ,  message  :   "Something Went Wrong || Please Try Again || ):"})
                                    
                                                          })


                                                    }
                                                    else
                                                    {
                                                        res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

                                                    }
                                                }).catch((err)=>{
                                                            res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

                                                        })


                                            }
                                            else
                                            {
                                                res.status(400).send({status : 400 ,  message  :    "Something Went Wrong"})

                                            }
                                        }).catch((err)=>{
                                            res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})
                                    
                                        })

                                    }
                                    } )
                                    }

                                })

                            }

                        }
                        else
                        {
                            res.status(400).send({status : 400 ,  message  :    "Incorrect OTP"})

                        }


                }else
                {
                    res.status(400).send({status : 400 ,  message  :    "Something Went Wrong"})

                }
            }).catch((err)=>{
        res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})
    })
        }
        else
        {
        res.status(400).send({status : 400 ,  message  :   "You are not registered User ):"})

        }
    }).catch((err)=>{
        res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

    })

}

exports.sendOpt  = (req,res)=>{
    
    const {email} =  req.body;

    var otp  =  Math.floor(Math.random() * 87637).toString().padStart(6, 0)


    OtpSchema.deleteOne({email :  email}).then((d1)=>{

        UserSchema.find({email : email}).then((r1)=>{
        if(r1.length > 0)
        {

            OtpSchema.insertMany({time : Number(new Date()) ,  email : r1[0].email ,  otp : otp  }).then((r2)=>{
                if(r2.length >  0)
                {

                    transporter.sendMail({
                        from: '"Node-Web 👻" <anjalibari09@gmail.com>', // sender address
                        to: email, // list of receivers
                        subject: "Password Reset (Node Web)", // Subject line
                        text: "Hello" + r1[0].name, // plain text body
                        html: `<h3>Your 6 digit  OTP to Reset Your Password is : ${otp} 👻 </h3>`, // html body
                      }).then((m_res)=>{
                        if(m_res.messageId)
                        {
                            res.status(200).send({status : 200 ,  message  :   "OTP Sent Successsfully"})
                        }
                        else
                        {
                            res.status(400).send({status : 400 ,  message  :   "Something Went Wrong || Please Try Again || ):"})

                        }

                      }).catch((err)=>{
                        res.status(400).send({status : 400 ,  message  :   "Something Went Wrong || Please Try Again || ):"})

                      })
        

                }
                else
                {
                    res.status(400).send({status : 400 , message : "Something Went wrong || Try Again):"})

                }
            }).catch((err)=>{
                res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

            })

        }
        else
        {
            res.status(400).send({status : 400 , message : "You are not Registered User ):"})
        }

    }).catch((err)=>{
        res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

    })

        
    }).catch((err)=>{
                res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

    })

}


exports.login= (req,res) =>{

const {email , password} =  req.body

UserSchema.find({email  : email}).then((r1)=>{
    if(r1.length > 0)
    {
       bcrypt.compare(password , r1[0].password , function(err, status){
        if(err)
        {
            res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

        }
        else
        {
            if(status == true)
            {
                res.status(200).send({status : 200 , data : {name : r1[0].name ,  email : r1[0].email ,  mobile : r1[0].mobile}  , message  :   "Login Successfully :)"})

            }
            else
            {
                res.status(400).send({status : 400 ,  message  :   "Incorrect Password ):"})

            }
        }
       })
    }else
    {
        res.status(400).send({status : 400 ,  message  :   "You are not Registered User || Please Register First ):"})

    }

}).catch((err)=>{
    res.status(500).send({status : 500 ,  message  :   "Something Went Wrong"})

})


}

exports.addUser = (req,res)=>{

    const {name , email ,mobile, password,} = req.body
 


    bcrypt.genSalt(10, function(err , salt){
       if(err)
       {
        res.status(500).send({status : 500 , message : "Something is going wrong!!"})
       }
       else
       {
            bcrypt.hash(password , salt, function(err,hash){
                if(err)
                {
                 res.status(500).send({status : 500 , message : "Something is going wrong!!"})
                }
                else
                {
                    UserSchema.insertMany({name : name , email : email , mobile : mobile, password : hash,}).then((result)=>{
      
                        console.log(result)
                        if(result.length > 0)
                        {
                            res.status(200).send({status : 200 , message : "User Registered Successfully"})
                        }
                        else
                        {
                            res.status(400).send({status : 400 , message : "User Registratin Failed || Please Try Again :("})
                        }
                    }).catch((err)=>{
                        console.log(err.name)
                        console.log(err.code)
                        console.log(err.message)
                        if(err.code == 11000)
                        {
                            res.status(400).send({status : 400 , message : `User already exist with this ${err.message.split('{')[1].split(":")[0]} : ${err.message.split('{')[1].split(":")[1].replace(`"` , " ").replace('}' , ' ')}`})
                        }
                        else if(err.name == 'ValidationError'){
                
                            res.status(400).send({status : 400 , message : `${err.message.split(":")[1].trim().toUpperCase()} is Required for Registration`})
                        }
                        else
                        {
                           res.status(500).send({ status : 500 , message : "Something went wrong"})
                        }
                    })


                }
            })

        }
    })
    
}



exports.getAllCourses = (req,res)=>{

    CourseSchema.find({}).then((result)=>{
        if(result.length > 0)
        {
            res.status(200).send({status : 200 , data : result})
        }
        else
        {
            res.status(200).send({status : 200 , data : []})
        }
    }).catch((err)=>{
        res.status(500).send({status : 500 , message : "Something Went Wrong While Fetching Courses"})
    })

}
