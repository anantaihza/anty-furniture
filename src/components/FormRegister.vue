<template>
  <div class="formulir">
    <h1 class="d-block d-sm-block d-md-block d-lg-none">Anty Furniture</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" />
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button type="submit" class="btn" @click="register">SIGN UP</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "form-register",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
    }
  }
};
</script>

<style scoped>
.formulir {
  padding: 13rem 8rem;
}
form .btn {
  background-color: #fd961e;
  padding-left: 2rem;
  padding-right: 2rem;
}
form .btn:hover {
  background-color: rgb(253, 138, 7);
}
.form-group label {
  font-weight: 700;
}
.form-group input {
  border-radius: 10px;
}
.form-group input:focus {
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>