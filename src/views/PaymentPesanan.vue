<template>
  <div>
    <navbar />
    <subnav />
    <div class="container mt-4 py-4">
      <h2>PAYMENT INFORMATION</h2>
      <div class="container mt-4 payment text-center">
        <h4>Transfer to account number :</h4>
        <div class="card mt-4">
          <div class="card-body">
            <h1 class="m-auto">502 - 552 - 9980</h1>
          </div>
        </div>
        <h4>The amount to be paid : Rp. 598.000</h4>
        <button type="button" class="btn">PAY</button>
      </div>
    </div>
    <footers />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Footers from "@/components/Footers.vue";

export default {
  name: "payment-pesanan",
  components: {
    Navbar,
    Subnav,
    Footers
  }
};
</script>

<style scoped>
h4 {
    font-weight: 500;
    color: #424242;
    margin-top: 6%;
    margin-bottom: 3%;
}
.card {
    margin : auto 20%;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}
.payment button {
    margin-bottom: 50px;
    padding-right: 50px;
    padding-left: 50px;
    border-radius: 0;
    background: #FD961E;
}
.payment button:hover {
    background: #f08d1d;
}
</style>