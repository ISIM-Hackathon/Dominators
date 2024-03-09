const express = require('express');
const router =  express.Router()
const AdminController = require('../Controllers/AdminControllers')


router.post('/add-course' ,AdminController.AddCourses)



 module.exports  =  router;