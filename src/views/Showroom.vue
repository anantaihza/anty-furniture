<template>
  <div>
    <navbar :navHome="true" />
    <subnav />
    <div class="container" id="head-category">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td>
              <img v-bind="{ src : room.roomphotos[0].urlPhoto, alt : room.roomName }" width="100%" />
            </td>
            <td>
              <div class="container">
                <h1>{{ room.roomName }}</h1>
                <p>{{ room.roomDesc }}</p>
                <div class="row">
                  <div v-for="categ in category" :key="categ.id">
                    <div class="category text-center">
                      <button
                        @click="getProduct(categ.id)"
                        class="btn btn-light col-lg-11 col-md-11 col-sm-11 col-11"
                      >{{ categ.categoryName }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container" id="preference-product">
      <div v-if="ctgClick == false" class="row text-center">
        <div class="container mb-4">
          <h3>All Product</h3>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-6" v-for="prod in recommendation" :key="prod.id">
          <router-link :to="{ name: 'Product', params: { id: prod.id } }" class="btn">
            <div class="card text-center">
              <img
                v-bind="{ src : prod.productphotos[0].urlPhoto, alt : prod.productName }"
                class="card-img-top"
              />
              <div class="card-body">
                <h5>{{ prod.productName }}</h5>
                <price :value="prod.productPrice" />
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div v-else-if="product.length == 0 || category.length == 0">
        <div class="jumbotron jumbotron-fluid bg-white">
          <div class="container text-center">
            <br />
            <h2 class="text-muted">Product Not Found</h2>
            <br />
          </div>
        </div>
      </div>
      <div v-else class="row text-center">
        <div class="col-md-4 col-lg-3 col-sm-6 col-6" v-for="prod in product" :key="prod.id">
          <router-link :to="{ name: 'Product', params: { id: prod.id } }" class="btn">
            <div class="card text-center">
              <img
                v-bind="{ src : prod.productphotos[0].urlPhoto, alt : prod.productName }"
                class="card-img-top"
              />
              <div class="card-body">
                <h5>{{ prod.productName }}</h5>
                <price :value="prod.productPrice" />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Price from "@/components/Price.vue";
import axios from "axios";

export default {
  name: "Showroom",
  components: {
    Navbar,
    Subnav,
    Price
  },
  data() {
    return {
      ctgClick: false,
      room: [],
      product: [],
      category: [],
      recommendation: []
    };
  },
  created() {
    this.getRoom();
    this.getCategory();
    this.getRecommendation();
  },
  methods: {
    getRoom() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/room/${this.$route.params.id}`,
        method: "get"
      };
      axios(options)
        .then(response => {
          let roomId = response.data.data;
          this.room = roomId;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getCategory() {
      const optionsC = {
        url: "https://rpl.abisatria.my.id/api/category/",
        method: "get"
      };
      axios(optionsC)
        .then(response => {
          let dataCategory = [];
          let categories = response.data.data;
          categories.map(data => {
            data.rooms.map(subdata => {
              if (this.$route.params.id == subdata.id) {
                dataCategory.push(data);
              }
            });
          });
          this.category = dataCategory;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getProduct: function(id) {
      const options = {
        url: `https://rpl.abisatria.my.id/api/product/${id}`,
        method: "get"
      };
      axios(options)
        .then(response => {
          let ctgId = response.data.data;
          this.product = ctgId;
          this.ctgClick = true
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
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getRoom();
    this.getCategory();
    this.getRecommendation()
  }
};
</script>

<style scoped>
#preference-product .container {
  margin-top: 50px;
}
.col-md-4 .card {
  border: none;
  margin-bottom: 15px;
  padding: 10px 20px;
}
.col-md-4 .card:hover {
  background-color: #d8d8d8;
}
.col-md-4 .card img {
  display: block;
  margin: 20px auto;
  height: 12vw;
  object-fit: contain;
}
#head-category {
  margin-top: 50px;
}
.category button {
  margin-right: 20px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgb(204, 204, 204);
  border-radius: 18px;
  padding: 3px 10px;
}
.category button:focus {
  background-color: #ebebeb;
}
</style>