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
                <form-login></form-login>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";


export default {
  name: "login",
  components: {
    FormLogin
  }
};
</script>

<style scoped>
.strip {
    float: left;
    overflow: auto;
    width: 66px;
    height: 55rem;
    
    background: #FD961E;
}
.brand {
    /* position: absolute; */
    /* width: 600px;
    height: 1024px;
    left: 66px;
    top: 0px; */
    background: #70B2EE;
    padding: 22.7rem 13rem;

}
.brand h1 {
    color: white;
    font-family: 'Snippet', sans-serif;
    font-size: 46px;
}
</style>