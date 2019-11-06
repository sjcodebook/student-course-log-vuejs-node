<template>
  <div id="course">
    <AddCourse v-bind:allStudents="allStudents" v-on:add-course="addCourse" />
  </div>
</template>

<script>
import AddCourse from "./../components/AddCourse";
import axios from "axios";
export default {
  name: "Course",
  components: {
    AddCourse
  },
  data() {
    return {
      allCourses: [],
      allStudents: []
    };
  },
  methods: {
    addCourse(newCourse) {
      const { Course_name, Professor, Students } = newCourse;
      axios
        .post("http://localhost:5000/courses/add", {
          Course_name,
          Professor,
          Students
        })
        .then(res => this.allCourses.push(res.data))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://localhost:5000/courses/")
      .then(res => (this.allCourses = res.data))
      .catch(err => console.log(err));

    axios
      .get("http://localhost:5000/students/")
      .then(res => (this.allStudents = res.data))
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
