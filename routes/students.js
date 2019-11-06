const router = require('express').Router();
const uuidv4 = require('uuid/v4');
let Students = require('../models/studentsModel');

router.route('/').get((req, res) => {
  Students.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Student_id = uuidv4();
  const roll_no = req.body.roll_no;
  const Name = req.body.Name;
  const Address = req.body.Address;
  const College = req.body.College;
  const Courses = req.body.Courses;

  const newStudent = new Students({
    Student_id,
    roll_no,
    Name,
    Address,
    College,
    Courses
  });

  newStudent
    .save()
    .then(() => res.json('Student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Students.findOne({ Student_id: req.params.id })
    .then(Student => res.json(Student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Students.remove({ Student_id: req.params.id })
    .then(Student => res.json('Student removed'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Students.findOne({ Student_id: req.params.id })
    .then(student => {
      student.roll_no = req.body.roll_no;
      student.Name = req.body.Name;
      student.Address = req.body.Address;
      student.College = req.body.College;
      student.Courses = req.body.Courses;

      student
        .save()
        .then(() => res.json('Student info updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
