<template>
  <div id="home">
    <AddStudent v-bind:allCourses="allCourses" v-on:add-student="addStudent" />
  </div>
</template>

<script>
import AddStudent from "./../components/AddStudent";
import axios from "axios";
export default {
  name: "Home",
  components: {
    AddStudent
  },
  data() {
    return {
      allStudents: [],
      allCourses: []
    };
  },
  methods: {
    addStudent(newStudent) {
      const { roll_no, Name, Address, College, Courses } = newStudent;
      axios
        .post("http://localhost:5000/students/add", {
          roll_no,
          Name,
          Address,
          College,
          Courses
        })
        .then(res => this.allStudents.push(res.data))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://localhost:5000/students/")
      .then(res => (this.allStudents = res.data))
      .catch(err => console.log(err));

    axios
      .get("http://localhost:5000/courses")
      .then(res => (this.allCourses = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
