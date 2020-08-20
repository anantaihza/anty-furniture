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
            <ValidationObserver v-slot="{ passes }">
              <form @submit.prevent="passes(onSubmit)">
                <ValidationProvider
                  tag="div"
                  rules="required"
                  v-slot="{ errors, required, ariaInput, ariaMsg }"
                >
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" v-model="name" />
                    <span v-bind="ariaMsg" v-if="errors[0]">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  tag="div"
                  rules="required|email"
                  v-slot="{ errors, required, ariaInput, ariaMsg }"
                >
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" />
                    <span v-bind="ariaMsg" v-if="errors[0]">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <div class="form-group">
                  <label for="phoneNumber">Phone Number</label>
                  <div class="phoneNumber">
                    <input
                      type="number"
                      class="form-control"
                      id="phoneNumber"
                      v-model="phone"
                      required
                    />
                  </div>
                </div>
                <ValidationProvider
                  tag="div"
                  rules="required|min:6|confirmed:pass"
                  v-slot="{ errors, required, ariaInput, ariaMsg }"
                >
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" />
                    <span v-bind="ariaMsg" v-if="errors[0]">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  tag="div"
                  rules="required"
                  vid="pass"
                  v-slot="{ errors, required, ariaInput, ariaMsg }"
                >
                  <div class="form-group">
                    <label for="repassword">Password Confirmation</label>
                    <input
                      type="password"
                      class="form-control"
                      id="repassword"
                      v-model="rePassword"
                    />
                    <span v-bind="ariaMsg" v-if="errors[0]">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <div class="d-flex justify-content-center mt-5">
                  <button type="submit" class="btn">SIGN UP</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate";
import axios from 'axios';

export default {
  name: "register",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: ""
    };
  },
  methods: {
    onSubmit: function() {
      if (this.email.trim() && this.password.trim() && this.rePassword.trim()) {

        let name, email, phone, password, rePassword;
        name = this.name;
        email = this.email;
        phone = this.phone;
        password = this.password;
        rePassword = this.rePassword;

        const option = {
          url: "https://rpl.abisatria.my.id/api/customer/",
          method: "post",
          data: { name, email, phone, password, rePassword }
        }
        axios(option)
          .then(response => {
            response.data

            this.$router.push({
                name: "Login"
            });

          })
          .catch(e => {
            // alert(e);
            console.log(e)
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
  padding: 10rem 8rem;
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
/* Chrome, Safari, Edge, Opera */
.phoneNumber input::-webkit-outer-spin-button,
.phoneNumber input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.phoneNumber input[type="number"] {
  -moz-appearance: textfield;
}
</style>