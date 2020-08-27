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
                <div class="form-group">
                  <label for="code">Code</label>
                  <div class="code">
                    <input type="number" class="form-control" id="code" />
                  </div>
                </div>
                <ValidationProvider
                  tag="div"
                  rules="required|min:6|confirmed:pass"
                  v-slot="{ errors, required, ariaInput, ariaMsg }"
                >
                  <div class="form-group">
                    <label for="password">New Password</label>
                    <input type="password" class="form-control" id="password" v-model="newPass" />
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
                    <label for="repassword">Confirm New Password</label>
                    <input type="password" class="form-control" id="repassword" v-model="cNewPass" />
                    <span v-bind="ariaMsg" v-if="errors[0]">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <div class="d-flex justify-content-center mt-5">
                  <button type="submit" class="btn">Save</button>
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

export default {
  name: "login",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
        code: "",
        newPass: "",
        cNewPass: ""
    };
  },
  methods: {
    onSubmit: function() {}
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
/* Chrome, Safari, Edge, Opera */
.code input::-webkit-outer-spin-button,
.code input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.code input[type="number"] {
  -moz-appearance: textfield;
}
</style>