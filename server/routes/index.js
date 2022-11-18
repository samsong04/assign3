var express = require('express');
var router = express.Router();
let indexController =require('../controller/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/course',indexController.displayCoursePage);


module.exports = router;
