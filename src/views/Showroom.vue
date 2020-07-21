<template>
  <div>
    <navbar :navBack="true" />
    <subnav />
    <showroom-head />
    <div class="container" id="preference-product">
      <div class="row text-center">
        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/sheeva-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Sheeva Sofa</h5>
                <p>Rp. 2.635.000</p>
              </div>
            </div>
          </button>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/appollo-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Appollo Sofa</h5>
                <p>Rp. 2.980.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/alden-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Alden Sofa</h5>
                <p>Rp. 3.268.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/hemling-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Hemling Sofa</h5>
                <p>Rp. 3.130.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/luxor-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>luxor Sofa</h5>
                <p>Rp. 4.465.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/vimie-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Vimie Sofa</h5>
                <p>Rp. 4.690.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/charmen-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Charmen Sofa</h5>
                <p>Rp. 4.710.000</p>
              </div>
            </div>
          </button>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-6 col-6">
          <button type="button" class="btn">
            <div class="card text-center">
              <img src="@/assets/showroom/landskoma-sofa.png" class="card-img-top" alt />
              <div class="card-body">
                <h5>Landskoma Sofa</h5>
                <p>Rp. 3.268.000</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <footers />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import ShowroomHead from "@/components/ShowroomHead.vue";
import Footers from "@/components/Footers.vue";

export default {
  name: "product",
  components: {
    Navbar,
    Subnav,
    ShowroomHead,
    Footers
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
  /* width: 40%; */
  display: block;
  margin: 20px auto;
  height: 12vw;
  object-fit: contain;
}
</style>