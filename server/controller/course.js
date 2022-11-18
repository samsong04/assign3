let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//need to connect with course model

let Course = require('../models/course')

//Need to perform CRUD Operation
module.exports.displayCourseList =(req,res,next)=> {
    Course.find((err, courselist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('course/list',{
                title:'Course List ',
                 Courselist: courselist
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('course/add',{title:'Add Course'})
}
module.exports.processAddPage = (req,res,next)=> {
    let newCourse = Course ({
        "course":req.body.course,
        "coursenum":req.body.coursenum,
        "professor":req.body.professor,
        "prerequisite":req.body.prerequisite,
        "semester":req.body.semester
    });
    Course.create(newCourse,(err,Course) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/course-list');
        }
        })
}

module.exports.displayEditPage =(req,res,next)=> {
    let id = req.params.id;
    Course.findById(id,(err,courseToEdit)=> {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('course/edit',{title: 'Edit Course', course:courseToEdit});
        }
    });
}
module.exports.processEditPage =(req,res,next)=>{
    let id=req.params.id;
    let updateCourse =Course({
        "_id":id,
        "course":req.body.course,
        "coursenum":req.body.coursenum,
        "professor":req.body.professor,
        "prerequisite":req.body.prerequisite,
        "semester":req.body.semester
    });
    Course.updateOne({_id:id},updateCourse,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/course-list');
        }
    });
}

module.exports.performDelete=(req,res,next)=>{
    let id=req.params.id;
    Course.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/course-list');
        }
    });
}

