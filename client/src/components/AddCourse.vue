<template>
  <div>
    <form @submit.prevent="addCourse">
      <input v-model="Course_name" type="text" name="Course_name" placeholder="Add Name" />
      <input v-model="Professor" type="text" name="Professor" placeholder="Add Professor" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
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
        Professor: this.Professor
      };
      // Send up to parent
      this.$emit("add-course", newCourse);
      this.Course_name = "";
      this.Professor = "";
    }
  }
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
