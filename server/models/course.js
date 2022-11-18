//mongooes library
let mongoose = require('mongoose');

//create a course model
let courseModel = mongoose.Schema({
    course: String,
    coursenum: String,
    professor: String,
    prerequisite: String,
    semester: String
    },
    {
        collection: "courses" //my collection name is courses
    }
);
module.exports =mongoose.model('Course', courseModel);
