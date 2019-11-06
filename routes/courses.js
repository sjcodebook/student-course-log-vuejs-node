const router = require('express').Router();
const uuidv4 = require('uuid/v4');
let Courses = require('../models/coursesModel');

router.route('/').get((req, res) => {
  Courses.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Course_id = uuidv4();
  const Course_name = req.body.Course_name;
  const Professor = req.body.Professor;
  const Students = ['1', '2'];

  const newCourse = new Courses({
    Course_id,
    Course_name,
    Professor,
    Students
  });

  newCourse
    .save()
    .then(() => res.json('Course added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Courses.findOne({ Course_id: req.params.id })
    .then(Course => res.json(Course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Courses.remove({ Course_id: req.params.id })
    .then(Course => res.json('Course removed'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Courses.findOne({ Course_id: req.params.id })
    .then(course => {
      course.Course_id = uuidv4();
      course.Course_name = req.body.Course_name;
      course.Professor = req.body.Professor;
      course.Students = ['1', '2'];

      course
        .save()
        .then(() => res.json('Course info updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
