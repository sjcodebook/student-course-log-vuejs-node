<template>
  <div>
    <form @submit.prevent="addStudent">
      <input
        v-model="roll_no"
        type="text"
        name="roll_no"
        placeholder="Add Roll No."
        autocomplete="off"
        required
      />
      <input
        v-model="Name"
        type="text"
        name="Name"
        placeholder="Add Name"
        autocomplete="off"
        required
      />
      <input
        v-model="Address"
        type="text"
        name="Address"
        placeholder="Add Address"
        autocomplete="off"
        required
      />
      <input
        v-model="College"
        type="text"
        name="College"
        placeholder="Add College"
        autocomplete="off"
        required
      />

      <select
        class="form-control"
        id="coursesforstudents"
        name="courses[]"
        multiple="multiple"
        required
        :style="{ 'width': '200px' }"
      >
        <option
          v-for="course in allCourses"
          :value="course.Course_id"
          :key="course.Course_id"
        >{{ course.Course_name }}</option>
      </select>

      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import multiSelectArray from "./../../utils/multiSelectArr";

export default {
  name: "AddStudent",
  data() {
    return {
      roll_no: "",
      Name: "",
      Address: "",
      College: ""
    };
  },
  methods: {
    addStudent() {
      const newStudent = {
        roll_no: this.roll_no,
        Name: this.Name,
        Address: this.Address,
        College: this.College,
        Courses: multiSelectArray("coursesforstudents")
      };
      // Send up to parent
      this.$emit("add-student", newStudent);
      this.roll_no = "";
      this.Name = "";
      this.Address = "";
      this.College = "";
      $("#coursesforstudents")
        .val(null)
        .trigger("change");
    }
  },
  created() {
    $(document).ready(function() {
      $("#coursesforstudents").select2({
        placeholder: "Select Courses"
      });
    });
  },
  props: ["allCourses"]
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>
