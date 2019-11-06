const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coursesSchema = new Schema(
  {
    Course_id: {
      type: String,
      required: true
    },
    Course_name: {
      type: String,
      required: true
    },
    Professor: {
      type: String,
      required: true
    },
    Students: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
