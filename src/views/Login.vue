<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-6 d-none d-lg-block">
          <div class="row">
            <div class="strip"></div>
            <div class="brand">
              <h1>Anty</h1>
              <h1>Furniture</h1>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 my-auto">
          <div class="formulir">
            <h1 class="d-block d-sm-block d-md-block d-lg-none">Anty Furniture</h1>
            <form @submit.prevent="login()">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" />
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" />
                <a href>Forgot Password ?</a>
              </div>
              <div class="d-flex justify-content-center mt-5">
                <button type="submit" class="btn">LOGIN</button>
              </div>
            </form>
            <router-link
              class="d-flex justify-content-center mt-3"
              to="/register"
            >Don't have an account ?</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      if (this.email.trim() && this.password.trim()) {
        let email = this.email;
        let password = this.password;

        const options = {
          url: "https://rpl.abisatria.my.id//api/customer/login",
          method: "post",
          data: {
            email,
            password
          }
        };

        axios(options).then(response => {
          const token = response.data.data.token;
          console.log(response.data.data.token)
          window.localStorage.setItem('access_token', token)

          if (token) {
            this.$router.push({
              name: "Landing",
              params: {
                token: token
              }
            });
          }
        })
        .catch(e => {
          alert(e + "\n" + "Gagal Login");
        });
      }
    }
  }
};
</script>

<style scoped>
.strip {
  float: left;
  overflow: auto;
  width: 66px;
  height: 55rem;

  background: #fd961e;
}
.brand {
  background: #70b2ee;
  padding: 22.7rem 13rem;
}
.brand h1 {
  color: white;
  font-family: "Snippet", sans-serif;
  font-size: 46px;
}
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