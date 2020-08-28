<template>
  <div>
    <navbar :navHome="true" />
    <subnav />
    <div class="container" id="promo">
      <div class="container">
        <h2>Result</h2>
        <div v-if="!dataSearch.length == 0">
          <div class="row text-center py-3">
            <div class="col-lg-3 col-md-4 col-sm-6 col-6" v-for="item in dataSearch" :key="item.id">
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
        </div>
        <div v-else>
            <div class="jumbotron jumbotron-fluid bg-white">
          <div class="container text-center">
            <br />
            <h2 class="text-muted">Product Not Found</h2>
            <br />
          </div>
        </div>
        </div>

        <hr />
      </div>
      <div class="container" id="new-items">
        <div v-if="!newItem.length == 0">
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
        </div>
        <div v-else>
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
import axios from "axios";

export default {
  name: "search",
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
      dataSearch: [],
      recommendation: [],
      searchKey: this.$route.params.key
    };
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
    }
    this.getNewItem();
    this.getRecommendation();
    this.getSearch();
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
    },
    getSearch() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/search/product/${this.searchKey}`,
        method: "get"
      };
      axios(options).then(response => {
        this.dataSearch = response.data.data;

        console.log(response.data.data);
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