<template>
  <div>
    <form @submit.prevent="addStudent">
      <input v-model="roll_no" type="text" name="roll_no" placeholder="Add Roll No." />
      <input v-model="Name" type="text" name="Name" placeholder="Add Name" />
      <input v-model="Address" type="text" name="Address" placeholder="Add Address" />
      <input v-model="College" type="text" name="College" placeholder="Add College" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
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
        College: this.College
      };
      // Send up to parent
      this.$emit("add-student", newStudent);
      this.roll_no = "";
      this.Name = "";
      this.Address = "";
      this.College = "";
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
