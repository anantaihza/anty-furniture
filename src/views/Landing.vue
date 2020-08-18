<template>
  <div>
    <navbar />
    <subnav />
    <div class="container" id="promo">
      <div class="row">
        <div class="col-md-5">
          <a href="#">
            <img src="@/assets/landing/promo1.png" alt width="100%" />
          </a>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <a href="#">
            <img src="@/assets/landing/promo2.png" alt width="100%" />
          </a>
        </div>
      </div>
      <div class="container" id="new-items">
        <h2 class="my-4">New Item</h2>
        <div class="row text-center py-3">
          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <router-link type="button" class="btn prod" to="/product">
              <div class="card">
                <div class="card-body">
                  <img src="@/assets/landing/chest.png" alt />
                  <h4 class="pt-3">Kids Dresser and Chest</h4>
                  <p>
                    <price :value="475000" />
                  </p>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <button type="button" class="btn prod">
              <div class="card">
                <div class="card-body">
                  <img src="@/assets/landing/cabinet.png" alt />
                  <h4 class="pt-3">Royal Medicinal Cabinet</h4>
                  <p>Rp. 390.000</p>
                </div>
              </div>
            </button>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <button type="button" class="btn prod">
              <div class="card">
                <div class="card-body">
                  <img src="@/assets/landing/chair.png" alt />
                  <h4 class="pt-3">Pello Chair</h4>
                  <p>Rp. 280.000</p>
                </div>
              </div>
            </button>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <button type="button" class="btn prod">
              <div class="card">
                <div class="card-body">
                  <img src="@/assets/landing/lamp.png" alt />
                  <h4 class="pt-3">Lampan Table Lamp</h4>
                  <p>Rp. 185.000</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Price from "@/components/Price.vue";
import Footers from "@/components/Footers.vue";

export default {
  name: "landing",
  components: {
    Navbar,
    Subnav,
    Price,
    Footers
  },
  data() {
    return {
      token: ""
    }
  },
  created() {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.token = token;
      console.log("mengakses dengan token")
    }
  }
};
</script>

<style scoped>
#promo {
  margin-top: 4%;
}
#new-items {
  margin-top: 5%;
}

.card:hover {
  background: rgb(235, 235, 235);
}
.card {
  border: none;
}
.card-body img {
  width: 100%;
  display: block;
  margin: auto;
  height: 12vw;
  object-fit: contain;
}
</style>