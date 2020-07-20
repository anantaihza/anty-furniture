<template>
  <div class="formulir">
    
      <h1 class="d-block d-sm-block d-md-block d-lg-none">Anty Furniture</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder
          />
          <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder />
          <a href>Forgot Password ?</a>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <button type="submit" class="btn">LOGIN</button>
        </div>
      </form>
      <router-link class="d-flex justify-content-center mt-3" to="/register">Don't have an account ?</router-link>
    
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
// import Footers from "@/components/Footers.vue";

export default {
  name: "form-login"
  
};
</script>

<style scoped>
.formulir {
    padding: 14rem 8rem;
}
form .btn {
    background-color: #FD961E;
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