//this file is for setting up the structure of a degree

// importing the schema that will be used for the courses
const { CourseSchema } = require("./course");
const mongoose = require('mongoose');

//creating a degree schema
var DegreeSchema = new mongoose.Schema({
    // the degree code
    code: {
        type: String,
        required: [true, "The degree code is required"]
    },

    name: {
        type: String,
        required: [true, "The degree name is required"]
    },

    // Total prescribed NQF credits
    credits: {
        type: Number,
    },

    degree_outline: String,

    // the courses one has to take in the degree, split by year (still need to find a good structure for this)
    courses: {
        type: CourseSchema,
    }

});

var Degree = mongoose.model('degree', DegreeSchema);

module.exports = Degree;