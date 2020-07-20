<template>
  <div>
    <navbar />
    <subnav />

     <div class="container order-info">
            <div class="row">
                <div class="col-md-6">
                    <info-customer />
                </div>
                <div class="vr"></div>

                <div class="col-md-5">
                    <order-desc />
                </div>
            </div>
        </div>

    
    
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import InfoCustomer from "@/components/InfoCustomer.vue";
import OrderDesc from "@/components/OrderDesc.vue";


export default {
  name: "info-pesanan",
  components: {
      Navbar,
      Subnav,
      InfoCustomer,
      OrderDesc
  }
};
</script>

<style scoped>
.order-info {
    margin-top: 35px;
}
.vr {
    margin: 20px 15px;
    border-left: 0.2px solid #424242;
}
</style>