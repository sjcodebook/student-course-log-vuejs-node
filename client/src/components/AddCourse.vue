<template>
  <div>
    <form @submit.prevent="addCourse">
      <input
        v-model="Course_name"
        type="text"
        name="Course_name"
        placeholder="Add Name"
        autocomplete="off"
        required
      />
      <input
        v-model="Professor"
        type="text"
        name="Professor"
        placeholder="Add Professor"
        autocomplete="off"
        required
      />
      <select
        class="form-control"
        id="studentsforcourses"
        name="students[]"
        multiple="multiple"
        required
        :style="{ 'width': '200px' }"
      >
        <option
          v-for="student in allStudents"
          :value="student.Student_id"
          :key="student.Student_id"
        >{{ student.Name }}</option>
      </select>
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import multiSelectArray from "./../../utils/multiSelectArr";

export default {
  name: "AddCourse",
  data() {
    return {
      Course_name: "",
      Professor: ""
    };
  },
  methods: {
    addCourse() {
      const newCourse = {
        Course_name: this.Course_name,
        Professor: this.Professor,
        Students: multiSelectArray("studentsforcourses")
      };
      // Send up to parent
      this.$emit("add-course", newCourse);
      this.Course_name = "";
      this.Professor = "";
      $("#studentsforcourses")
        .val(null)
        .trigger("change");
    }
  },
  created() {
    $(document).ready(function() {
      $("#studentsforcourses").select2({
        placeholder: "Select Students"
      });
    });
  },
  props: ["allStudents"]
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
