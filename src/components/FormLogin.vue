<template>
  <div class="formulir">
    <h1 class="d-block d-sm-block d-md-block d-lg-none">Anty Furniture</h1>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="user.email" />
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="user.password" />
        <a href>Forgot Password ?</a>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button class="btn" @click="login">LOGIN</button>
      </div>
    </form>
    <router-link class="d-flex justify-content-center mt-3" to="/register">Don't have an account ?</router-link>
  </div>
</template>

<script>
export default {
  name: "form-login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
      let datanya = {
        email: this.user.email,
        password: this.user.password
      };
      console.log(datanya.email);
      console.log(datanya.password);
    }
  }
};
</script>

<style scoped>
.formulir {
  padding: 14rem 8rem;
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