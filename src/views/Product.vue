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
          <h3>{{ prodDetail.productName }}</h3>
          <h4>
            <price :value="prodDetail.productPrice" />
          </h4>
          <br />
          <br />
          <h6>Description</h6>
          <p>{{ prodDetail.productDesc }}</p>
          <p>Stok : {{ prodDetail.productStock }}</p>
        </div>
        <div class="col-lg-3 col-md-3 m-auto pt-4 text-center">
          <quantity @child-qty="qtyValue" />
          <div class="col-12 mt-4 text-center">
            <button type="button" class="btn buy btn-sm btn-block">BUY</button>
            <button type="button" class="btn basket btn-sm btn-block">Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container py-4">
      <h3>Similar Items</h3>
      <div class="d-flex similar scrollbar">
        <div v-for="item in simProd" :key="item.id">
          <button type="button" class="btn">
            <div class="card text-center">
              <img v-bind="{ src : item.productphotos[0].urlPhoto }" class="card-img-top" />
              <div class="card-body">
                <h5>{{ item.productName }}</h5>
                <p>
                  <price :value="item.productPrice" />
                </p>
              </div>
            </div>
          </button>
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
      prodDetail: [],
      simProd: [],
      idProd: this.$route.params.id
    };
  },
  created() {
    this.getDataProduct();
    this.getSimilar();
  },
  methods: {
    qtyValue: function(params) {
      this.qty = params;
    },
    getDataProduct() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/product/detail/${this.$route.params.id}`,
        method: "get"
      };

      axios(options)
        .then(response => {
          this.prodDetail = response.data.data;
          console.log("Product Detail :", this.prodDetail);
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
          console.log("Product similar :", this.simProd);
        })
        .catch(e => {
          console.log(e);
        });
    }
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