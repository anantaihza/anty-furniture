<template>
  <div>
    <navbar :navHome="true" />
    <subnav />
    <div class="container" id="product-item">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <img src="@/assets/product/antique-lamp1.png" alt />
        </div>
        <div class="col-lg-5 col-md-7 pt-2">
          <h3>Antique Brass Tripod Floor Lamp</h3>
          <h4>Rp. 235.000</h4>
          <br />
          <h6>Description</h6>
          <p>Height : 204 Cm</p>
          <p>Diameter : 18 Cm</p>
          <p>Weight : 5.43 Kg</p>
          <p>Color : Black and White</p>
          <p>Materials : Brass with a Double Lined Linen Shade</p>
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
    <scroll-product />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import ScrollProduct from "@/components/ScrollProduct.vue";
import Quantity from "@/components/Quantity.vue";
// import Footers from "@/components/Footers.vue";

export default {
  name: "product",
  components: {
    Navbar,
    Subnav,
    ScrollProduct,
    Quantity
  },
  data() {
    return {
      qty: 1
    }
  },
  methods: {
    // Gets the checkbox information from the child component
    qtyValue: function(params) {
      this.qty = params;
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
    background: #FD961E;
    border-radius: 0;
}
.buy:hover, 
.basket:hover {
    background: #eb8c21;
}
hr {
  margin-top: 4%;
}
</style>