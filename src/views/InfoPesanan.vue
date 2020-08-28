<template>
  <div>
    <navbar :navInfoPesanan="true" />
    <subnav />
    <div class="container order-info">
      <div class="row">
        <div class="col-md-6">
          <h2>CUSTOMER INFORMATION</h2>
          <form class="customer-info">
            <div class="form-group row">
              <label for="form-name" class="col-sm-3 col-form-label">Name</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="form-name"
                  v-model="dataProfile.name"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="form-email" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control border-0"
                  id="form-email"
                  v-model="dataProfile.email"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="form-phoneNumber" class="col-sm-3 col-form-label">Phone Number</label>
              <div class="col-sm-9 phoneNumber">
                <input
                  type="number"
                  class="form-control border-0"
                  id="form-phoneNumber"
                  v-model="dataProfile.phone"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="form-address" class="col-sm-3 col-form-label">Street*</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="form-address"
                  v-model="street"
                  placeholder="Insert your Street"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3 col-form-label" for="province">Province*</label>
              <div class="col-sm-9">
                <select
                  @click="getCity"
                  class="form-control border-0"
                  id="province"
                  v-model="idProvince"
                >
                  <option
                    v-for="prov in province"
                    :key="prov.id"
                    :value="prov.id"
                  >{{ prov.provinceName }}</option>
                </select>
              </div>
            </div>
            <div class="form-group row" v-if="checkProvince">
              <label class="col-sm-3 col-form-label" for="city">City*</label>
              <div class="col-sm-9">
                <select class="form-control border-0" id="city" v-model="idCity">
                  <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.cityName }}</option>
                </select>
              </div>
            </div>
            <hr />
            <div class="form-group mt-4">
              <!-- loop from database -->
              <label for="payment-method">Payment Method</label>
              <select class="form-control border-0" id="payment-method" v-model="IdpaymentMethod">
                <option v-for="pay in payMethod" :key="pay.id" :value="pay.id">{{ pay.paymentBank }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="delivery-courier">Courier</label>
              <select class="form-control border-0" id="delivery-courier" v-model="deliveryCourier">
                <option value="jne">JNE</option>
                <option value="tiki">Tiki</option>
                <option value="pos">Pos</option>
              </select>
            </div>
            <div class="form-group">
              <label for="delivery-service">Delivery Service</label>
              <select
                @click="getDeliveryService"
                class="form-control border-0"
                id="delivery-service"
                v-model="deliveryService"
              >
                <option
                  v-for="delService in dataDelService"
                  :key="delService.service"
                  :value="delService"
                >{{ delService.service }} ({{ delService.description }})</option>
              </select>
            </div>
            <div class="form-group row pb-4 pt-1">
              <label for="delivery-fee" class="col-sm-3 col-form-label">Delivery Fee</label>
              <div class="col-sm-9">
                  <div v-for="c in deliveryService.cost" :key="c.value">
                    <input
                  type="text"
                  class="form-control form-control-sm border-0"
                  id="delivery-fee"
                  v-model="c.value"
                  readonly
                />
                  </div>  
              </div>
            </div>
            <button @click="submitData" type="button" class="btn next-btn ml-auto" to="/reviewPesanan">Next</button>
          </form>
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
import OrderDesc from "@/components/OrderDesc.vue";
import axios from "axios";

export default {
  name: "info-pesanan",
  props: ["getTotalWeight"],
  components: {
    Navbar,
    Subnav,
    OrderDesc
  },
  data() {
    return {
      idCity: null,
      idProvince: null,
      IdpaymentMethod: null,
      checkProvince: false,
      token: "",
      street: "",
      deliveryCourier: "",
      deliveryService: [],
      cart: [],
      cities: [],
      province: [],
      payMethod: [],
      dataProfile: [],
      dataDelService: []
    };
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
    }
    this.getProfile();
    this.getProvince();
    this.getPaymentMethod();
    this.getCart();
  },
  methods: {
    submitData: function() {
      let street = this.street
      let cityId = this.idCity
      let provinceId = this.idProvince
      let courierName = this.deliveryCourier
      let courierService = this.deliveryService.service
      let courierFee = this.deliveryService.cost[0].value
      let paymentMethodId = this.IdpaymentMethod
      sessionStorage.setItem("street", street);
      sessionStorage.setItem("cityId", cityId);
      sessionStorage.setItem("provinceId", provinceId);
      sessionStorage.setItem("courierName", courierName);
      sessionStorage.setItem("courierService", courierService);
      sessionStorage.setItem("courierFee", courierFee);
      sessionStorage.setItem("paymentMethodId", paymentMethodId);
      
      this.$router.push({
          name: "ReviewPesanan",
      });
      
    },
    getProfile() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/customer/profile",
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          this.dataProfile = response.data.data;
          console.log('Profile : ', this.dataProfile);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getProvince() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/ongkir/province",
        method: "get"
      };
      axios(options)
        .then(response => {
          this.province = response.data.data;
          console.log("Provinsi : ", this.province);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getCity() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/ongkir/city?provinceId=${this.idProvince}`,
        method: "get"
      };
      axios(options)
        .then(response => {
          this.cities = response.data.data;
          this.checkProvince = true;
          console.log("City : ", this.cities);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPaymentMethod() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/core/paymentMethod",
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          this.payMethod = response.data.data;
          console.log("Payment Method : ", this.payMethod);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getDeliveryService() {
      let tw = 0;
      for (let key in this.cart) {
        tw =
          tw +
          this.cart[key].product.productWeight * this.cart[key].quantity * 1000;
      }
      if (this.token) {
        let token = this.token;
        let destination = this.idCity;
        if (tw > 30000) {
          tw = 30000;
        }
        let weight = tw;
        let courier = this.deliveryCourier;
        const options = {
          url: "https://rpl.abisatria.my.id/api/ongkir/courierFee",
          method: "post",
          data: {
            destination,
            weight,
            courier
          },
          headers: {
            authorization: token
          }
        };
        axios(options)
          .then(response => {
            this.dataDelService = response.data.data.costs;
            console.log("Delivery Service : ", this.dataDelService);
            console.log("Delivery Service Value : ", this.deliveryService.cost[0].value); 
          })
          .catch(e => {
            console.log(e.response);
          });
      }
    },
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
h2 {
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
/* Chrome, Safari, Edge, Opera */
.phoneNumber input::-webkit-outer-spin-button,
.phoneNumber input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.phoneNumber input[type="number"] {
  -moz-appearance: textfield;
}
</style>