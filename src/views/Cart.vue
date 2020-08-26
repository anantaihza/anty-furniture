<template>
  <div>
    <navbar :navHome="true" />
    <subnav />
    <section id="banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Your Basket</h1>
            <p>{{ qtyTotal }} Items | <price :value="priceTotal" /></p>
            <router-link type="button" class="btn payment" to="/infoPesanan">Payment</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="cart">
      <div class="container">
        <table class="table table-hover">
          <thead>
            <tr class="text-left">
              <th scope="col">No</th>
              <th scope="col">Product</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in cart" :key="item.id">
            <tr>
              <th scope="row">{{ index+1 }}</th>
              <td>
                <div class="row">
                  <div class="col-md-3">
                    <img src="@/assets/cart/Antique-lamp.png" alt />
                  </div>
                  <div class="col-md-6 ml-4 my-auto">
                    <h4>
                      <b>{{ item.product.productName }}</b>
                    </h4>
                    <p>
                      <price :value="item.product.productPrice" />
                    </p>
                    <p>{{ item.product.productDesc }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm spinner" role="group" aria-label="spinnerNumber">
                  <button type="button" class="btn" @click="delQty">-</button>

                  <div class="num-spin">
                    <input
                      type="number"
                      id="qty"
                      class="form-control border-0"
                      min="1"
                      v-model="item.quantity"
                      readonly
                    />
                  </div>

                  <button type="button" class="btn" @click="addQty">+</button>
                </div>
              </td>
              <td><price :value="item.product.productPrice * item.quantity" /></td>
              <td>
                <button @click="delCart(item.id)" class="btn btnRemove">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Price from "@/components/Price.vue";
import axios from "axios";

export default {
  name: "cart",
  components: {
    Navbar,
    Subnav,
    Price
  },
  data() {
    return {
      qty: 1,
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
    qtyTotal: function() {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].quantity;
      }
      return qty;
    },
    priceTotal: function() {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.productPrice * this.cart[key].quantity;
      }
      return sum;
    }
  },
  methods: {
    qtyValue: function(params) {
      this.qty = params;
    },
    addQty: function() {
      this.qty++;
    },
    delQty: function() {
      if (this.qty == 1) {
        this.qty = 1;
      } else {
        this.qty--;
      }
    },
    getCart() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/core/cart",
        method: "get",
        headers: {
          'authorization': this.token
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
    },
    delCart: function(id) {
      const options = {
        url: `https://rpl.abisatria.my.id/api/core/cart/${id}`,
        method: "delete",
        headers: {
          'authorization': this.token
        }
      };

      axios(options)
        .then(response => {
          let check = response.data;
          this.getCart();
          this.cart.splice(id, 1)
          console.log(check);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
#banner {
  margin-top: 50px;
  text-align: center;
}
#banner .payment {
  background: #fd961e;
  border-radius: 0;
  margin-bottom: 2rem;
}
#banner .payment:hover {
  background: #f78b0f;
}
#banner input {
  width: 5px;
}
#cart table tbody td img {
  width: 90%;
}
#cart table tbody td .box input {
  border: none;
  outline: none;
  background-color: rgb(241, 241, 241);
}
#cart table tbody td .box button {
  background-color: rgb(221, 220, 220);
  border: none;
  outline: none;
  border-radius: 3px;
}
#cart table tbody td .box button:hover {
  background-color: #d4d4d4;
}
.btnRemove {
  color: rgb(54, 54, 54);
}
.btnRemove:hover {
  background: rgb(228, 228, 228);
}
.spinner button {
  background: #c4c4c4;
}
.num-spin {
  padding: 0;
  width: 40px;
  height: 25px;
}
.num-spin input {
  border-radius: 0;
  height: 31px;
  background: #dfdcdc;
}
/* Chrome, Safari, Edge, Opera */
.num-spin input::-webkit-outer-spin-button,
.num-spin input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.num-spin input[type="number"] {
  -moz-appearance: textfield;
}
</style>