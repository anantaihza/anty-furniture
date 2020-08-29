<template>
  <div>
    <navbar :navDetailOrder="true" />
    <subnav />
    <div class="container order-info">
      <div class="row">
        <div class="col-md-6">
          <h2 class="trans">Transaction Status</h2>
          <div class="col-sm-9 mb-4">
            <h4 >Transaction Code :</h4>
            <p>{{ infoPayment.orderCode }}</p>
          </div>
          
            <div class="col-sm-9 mb-4">
              <h4>Transaction Status :</h4>
              <div v-if="infoPayment.transaction.transactionStatus == 'true'">
                <p>Already paid</p>
              </div>
              <div v-else>
                <p>Not yet pay</p>
              </div>
            </div>

          
          

          <div class="col-sm-9 mb-4">
            <h4>Payment Account Name :</h4>
            <p>{{ infoPayment.transaction.payment_method.paymentAccountName }}</p>
          </div>

          

          <div class="col-sm-9 mb-4">
            <h4>Account Number :</h4>
            <p>{{ infoPayment.transaction.payment_method.paymentAccountNumber }}</p>
          </div>
          <div class="col-sm-9 mb-4">
            <h4>Payment Bank : </h4>
            <p>{{ infoPayment.transaction.payment_method.paymentBank }}</p>
          </div>
          <hr>
          <div v-for="pay in infoPayment.order_statuses" :key="pay.id">
            <p>{{ pay.createdAt }}</p>
            <h2>{{ pay.statusName }} </h2>
            <h5>{{ pay.statusDesc }}</h5>
            <br>
            
            <hr>
          </div>
          
            
        </div>
        <div class="vr"></div>
        <div class="col-md-5">
          <div class="container">
            <h2>Product Detail</h2>

            <h4>
              Total :
              <price :value="infoPayment.orderPriceTotal" />
            </h4>
            <table class="table table-hover table-borderless table-fixed">
              <thead>
                <tr>
                  <th colspan="2">
                  </th>
                </tr>
              </thead>
              <tbody class="scrollbar">
                <div v-for="item in infoPayment.carts" :key="item.id">
                  <tr>
                    <td>
                      <img v-bind="{ src : item.product.productphotos[0].urlPhoto }" width="120rem" />
                    </td>
                    <td>
                      <p class="font-weight-bold">{{ item.product.productName }}</p>
                      <p>
                        <price :value="item.product.productPrice" />
                      </p>
                      <p>Qty : {{ item.quantity }}</p>
                    </td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>
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
  name: "order-detail",
  components: {
    Navbar,
    Subnav,
    Price
  },
  data() {
    return {
      infoPayment: []
    };
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
        url: `https://rpl.abisatria.my.id/api/customer/information/order/${this.$route.params.orderId}`,
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          this.infoPayment = response.data.data;
          console.log("Order : ", this.infoPayment);
        })
        .catch(e => {
          console.log(e);
        });
    }
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
.trans {
  margin-bottom: 9%;
}
.customer-info {
  margin-bottom: 10%;
}
.customer-info input,
.customer-info select {
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}
.customer-info label {
  font-weight: 600;
}
.next-btn {
  padding: 2px 30px;
  background: #fd961e;
  border-radius: 0;
}
.next-btn:hover {
  background: #ec8c1e;
}
.table-fixed thead {
  width: 100%;
}
.table-fixed tbody {
  height: 500px;
  overflow-y: auto;
  width: 100%;
}
.table-fixed thead,
.table-fixed tbody,
.table-fixed tr,
.table-fixed th {
  display: block;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>