<template>
  <div>
    <navbar :navPayment="true" />
    <subnav />
    <div class="container mt-4 py-4">
      <h2>PAYMENT INFORMATION</h2>
      <div class="container mt-4 payment text-center">
        <h4 class="mt-4">Transfer to account number :</h4>
        <div class="card mt-4">
          <div class="card-body">
            <h1 class="m-auto">{{ infoPayment.transaction.payment_method.paymentAccountNumber }}</h1>
          </div>
        </div>
        <div class="container mt-4">
          <h5 class="paid">Account Name : {{ infoPayment.transaction.payment_method.paymentAccountName }}</h5>
          <div class="container">

          <hr>
          </div>

          <h3>{{ infoPayment.transaction.payment_method.paymentBank }}</h3>
        </div>
        <h5 class="paid mt-3">The amount to be paid :  <price :value="infoPayment.orderPriceTotal" /></h5>
        <button type="button" class="btn">PAY</button>
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
  name: "payment-pesanan",
  components: {
    Navbar,
    Subnav,
    Price
  },
  data() {
    return {
      token: "",
      orderId: this.$route.params.orderId,
      infoPayment: []
    }
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
    }
    this.getInfoPayment();
  },
  methods: {
    getInfoPayment() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/customer/information/payment/${this.$route.params.orderId}`,
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          this.infoPayment = response.data.data;
          console.log('Informasi Payment : ', this.infoPayment);
          console.log('get account', this.infoPayment.transaction.payment_method.paymentAccountName);
          console.log('get account', this.infoPayment.transaction.payment_method.paymentAccountNumber);
          console.log('get account', this.infoPayment.transaction.payment_method.paymentBank);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.paid {
  font-weight: 500;
  color: #424242;
  margin-bottom: 3%;
}
.card {
  margin: auto 20%;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}
.payment button {
  margin-bottom: 50px;
  padding-right: 50px;
  padding-left: 50px;
  border-radius: 0;
  background: #fd961e;
}
.payment button:hover {
  background: #f08d1d;
}
</style>