<template>
  <div>
    <navbar />
    <subnav />
    <div class="container" id="promo">
      <div class="row">
        <div class="col-md-5">
          <a href="#">
            <img src="@/assets/landing/promo1.png" alt width="85%" />
          </a>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <a href="#">
            <img src="@/assets/landing/promo2.png" alt width="85%" />
          </a>
        </div>
      </div>
      <div class="container" id="new-items">
        <!-- <div v-if="!newItem.length == 0"> -->
          <h2 class="my-4">New Item</h2>
          <div class="row text-center py-3">
            <div class="col-lg-3 col-md-4 col-sm-6 col-6" v-for="item in newItem" :key="item.id">
              <router-link :to="{ name: 'Product', params: { id: item.id } }" class="btn prod">
                <div class="card">
                  <div class="card-body">
                    <img v-bind="{ src : item.productphotos[0].urlPhoto, alt : item.productName }" />
                    <h4 class="pt-3">{{ item.productName }}</h4>
                    <price :value="item.productPrice" />
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        <!-- </div> -->
        <!-- <div v-else> -->
          <h2 class="my-4">Recommendation</h2>
          <div class="row text-center py-3">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-6"
              v-for="item in recommendation"
              :key="item.id"
            >
              <router-link :to="{ name: 'Product', params: { id: item.id } }" class="btn prod">
                <div class="card">
                  <div class="card-body">
                    <img v-bind="{ src : item.productphotos[0].urlPhoto, alt : item.productName }" />
                    <h4 class="pt-3">{{ item.productName }}</h4>
                    <price :value="item.productPrice" />
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        <!-- </div> -->
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
import axios from "axios";

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
      token: "",
      newItem: [],
      recommendation: []
    };
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
    }
    this.getNewItem();
    this.getRecommendation();
  },
  methods: {
    getNewItem() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/search/newItems/product",
        method: "get"
      };
      axios(options)
        .then(response => {
          this.newItem = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getRecommendation() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/search/recommendation/product",
        method: "get"
      };
      axios(options)
        .then(response => {
          this.recommendation = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
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