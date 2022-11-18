let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//need to connect with course model

let Course = require('../models/course')
let courseController = require('../controller/course')

/*Read Operation*/
/*Get route for the course lsit*/
router.get('/',courseController.displayCourseList);


/*Add Operation*/
/*Get route for displaying the Add-page -- Create Operation*/
router.get('/add',courseController.displayAddPage);
/*Post route for processing the Add-page -- Create Operation*/
router.post('/add',courseController.processAddPage);
/*Edit Operation*/
/*Get route for displaying the Edit Operation -- Updatee Operation*/
router.get('/edit/:id',courseController.displayEditPage);
/*Post route for displaying the Edit Operation -- Update Operation*/
router.post('/edit/:id',courseController.processEditPage);


/*Delete Operation*/
/*Get to perform Delete Operation --Deletion*/
router.get('/delete/:id',courseController.performDelete);
module.exports=router;