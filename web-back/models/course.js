//this file is for setting up the structure of a course

const mongoose = require('mongoose');

//creating a course schema
var CourseSchema = new mongoose.Schema({
    // the course code
    code: {
        type: String,
        required: [true, "The course code is required"]
    },

    title: {
        type: String,
        required: [true, "The course title is required"]
    },

    // NQF credits
    credits: {
        type: Number,
        required: true
    },

    // HEQSF level
    level: {
        type: Number,
        required: true
    },

    // course requirements. The items in this list will be based on the Course schema
    pre_requisites: [CourseSchema],

    co_requisites: [CourseSchema],

    course_outline: String,

    DP_requirements: String,

    // the assessment strategy for the course.
    assessment: String,

    // the cost of the course
    cost: Number,

    // the times the course is offered
    // times: {} // Not sure what the structure should be

});

var Course = mongoose.model('course', CourseSchema);

module.exports = {Course, CourseSchema};