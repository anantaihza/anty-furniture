<template>
  <div>
    <div class="container">
      <h2>ORDER DESCRIPTION</h2>
      <table class="table table-hover table-borderless table-fixed">
        <thead>
          <tr>
            <th colspan="2">
              <h4 class="text-right">
                Total :
                <price :value="priceTotal" />
              </h4>
            </th>
          </tr>
        </thead>
        <tbody class="scrollbar">
          <div v-for="item in cart" :key="item.id">
            <tr>
              <td>
                <img v-bind="{ src : item.product.productphotos[0].urlPhoto }" width="120rem" />
              </td>
              <td>
                <p class="font-weight-bold">{{ item.product.productName }}</p>
                <p>
                  <price :value="item.product.productPrice * item.quantity" />
                </p>
                <p>Qty : {{ item.quantity }}</p>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Price from "@/components/Price.vue";
import axios from "axios";

export default {
  name: "order-desc",
  components: {
    Price
  },
  data() {
    return {
      cart: [],
      token: ""
    };
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
      console.log("mengakses dengan token");
    }
    this.getCart();
  },
  computed: {
    priceTotal: function() {
      let sum = 0;
      for (let key in this.cart) {
        sum =
          sum + this.cart[key].product.productPrice * this.cart[key].quantity;
      }
      return sum;
    }
  },
  methods: {
    getCart() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/core/cart",
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          this.cart = response.data.data.carts;
          console.log(this.cart);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 9%;
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