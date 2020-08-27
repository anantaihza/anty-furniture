<template>
  <div>
    <navbar :navHome="true" />
    <subnav />
    <div class="container" id="product-item">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" v-bind="{ src : prodDetail.productphotos[0].urlPhoto }" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" v-bind="{ src : prodDetail.productphotos[1].urlPhoto }" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-lg-5 col-md-7 pt-2">
          <h2>{{ prodDetail.productName }}</h2>
          <h4>
            <price :value="prodDetail.productPrice" />
          </h4>
          <br />
          <br />
          <h5>Description</h5>
          <p>{{ prodDetail.productDesc }}</p>
          <p>Weight : {{ prodDetail.productWeight }} Kg</p>
          <p>Stok : {{ prodDetail.productStock }}</p>
        </div>
        <div class="col-lg-3 col-md-3 m-auto pt-4 text-center">
          <quantity @child-qty="qtyValue" />
          <div class="col-12 mt-4 text-center">
            <button @click="buyNow" type="button" class="btn buy btn-sm btn-block">BUY</button>
            <button
              @click="addToCart"
              type="button"
              class="btn basket btn-sm btn-block"
            >Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container py-4">
      <div v-if="!simProd.length == 0">
        <h3>Similar Items</h3>
        <div class="d-flex similar scrollbar">
          <div v-for="item in simProd" :key="item.id">
            <router-link
              :to="{ name: 'Product', params: { id: item.id } }"
              type="button"
              class="btn"
            >
              <div class="card text-center">
                <img v-bind="{ src : item.productphotos[0].urlPhoto }" class="card-img-top" />
                <div class="card-body">
                  <h5>{{ item.productName }}</h5>
                  <p>
                    <price :value="item.productPrice" />
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <h3>Recommendation</h3>
        <div class="d-flex similar scrollbar">
          <div v-for="item in recommendation" :key="item.id">
            <router-link :to="{ name: 'Product', params: { id: item.id } }" class="btn">
              <div class="card text-center">
                <img v-bind="{ src : item.productphotos[0].urlPhoto }" class="card-img-top" />
                <div class="card-body">
                  <h5>{{ item.productName }}</h5>
                  <p>
                    <price :value="item.productPrice" />
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <h3>Recommendation</h3>
        <div class="d-flex similar scrollbar">
          <div v-for="item in recommendation" :key="item.id">
            <router-link :to="{ name: 'Product', params: { id: item.id } }" class="btn">
              <div class="card text-center">
                <img v-bind="{ src : item.productphotos[0].urlPhoto }" class="card-img-top" />
                <div class="card-body">
                  <h5>{{ item.productName }}</h5>
                  <p>
                    <price :value="item.productPrice" />
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Quantity from "@/components/Quantity.vue";
import Price from "@/components/Price.vue";
import axios from "axios";

export default {
  name: "product",
  components: {
    Navbar,
    Subnav,
    Price,
    Quantity
  },
  data() {
    return {
      qty: 1,
      token: "",
      idProduct: this.$route.params.id,
      simProd: [],
      prodDetail: [],
      recommendation: []
    };
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
    }
    this.getDataProduct();
    this.getSimilar();
    this.getRecommendation();
  },
  methods: {
    qtyValue: function(params) {
      this.qty = params;
    },
    buyNow: function() {
      if (this.token) {
        let token = this.token;
        let productId = this.idProduct;
        let quantity = this.qty;
        const options = {
          url: "https://rpl.abisatria.my.id/api/core/cart",
          method: "post",
          data: {
            productId,
            quantity
          },
          headers: {
            authorization: token
          }
        };
        axios(options)
          .then(response => {
            console.log('BuyNow : ', response.data.data);
            this.$router.push({
              name: "Cart"
            });
            alert("Berhasil Dimasukan ke Cart");
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.$router.push({
          name: "Login"
        });
      }
    },
    addToCart: function() {
      if (this.token) {
        let token = this.token;
        let productId = this.idProduct;
        let quantity = this.qty;
        const options = {
          url: "https://rpl.abisatria.my.id/api/core/cart",
          method: "post",
          data: {
            productId,
            quantity
          },
          headers: {
            authorization: token
          }
        };
        axios(options)
          .then(response => {
            console.log('addToCart : ', response.data.data);
            alert("Berhasil Dimasukan ke Cart");
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.$router.push({
          name: "Login"
        });
      }
    },
    getDataProduct() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/product/detail/${this.$route.params.id}`,
        method: "get"
      };
      axios(options)
        .then(response => {
          this.prodDetail = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getSimilar() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/search/similar/product/${this.$route.params.id}`,
        method: "get"
      };

      axios(options)
        .then(response => {
          this.simProd = response.data.data;
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
    this.getDataProduct();
    this.getSimilar();
    this.getRecommendation();
  }
};
</script>

<style scoped>
#product-item {
  margin-top: 5%;
}
#product-item .col-lg-5 {
  margin-left: 3%;
}
#product-item .col-lg-5 p {
  margin-bottom: 0;
}
.buy,
.basket {
  background: #fd961e;
  border-radius: 0;
}
.buy:hover,
.basket:hover {
  background: #eb8c21;
}
hr {
  margin-top: 4%;
}
.similar {
  overflow: auto;
}
.card {
  display: inline-block;
  width: 16rem;
  border: none;
  margin-bottom: 15px;
  padding: 10px 20px;
}
.card:hover {
  border-radius: 8px;
  background-color: #d8d8d8;
}
.card img {
  /* width: 40%; */
  display: block;
  margin: 20px auto;
  height: 10vw;
  object-fit: contain;
}
.scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>