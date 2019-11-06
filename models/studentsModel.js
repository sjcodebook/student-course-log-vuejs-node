const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentsSchema = new Schema(
  {
    Student_id: {
      type: String,
      required: true
    },
    roll_no: {
      type: Number,
      required: true
    },
    Name: {
      type: String,
      required: true
    },
    Address: {
      type: String,
      required: true
    },
    College: {
      type: String,
      required: true
    },
    Courses: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Students = mongoose.model('Students', studentsSchema);

module.exports = Students;
