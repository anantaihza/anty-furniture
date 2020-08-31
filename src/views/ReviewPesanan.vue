<template>
  <div>
    <navbar :navReviewPesanan="true" />
    <subnav />
    <div class="container order-info">
      <div class="row">
        <div class="col-md-6">
          <h2>REVIEW CUSTOMER INFORMATION</h2>
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
              <label for="form-address" class="col-sm-3 col-form-label">Street</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="form-address"
                  v-model="street"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3 col-form-label" for="province">Province</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="province"
                  v-model="province.provinceName"
                  readonly
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label" for="city">City</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="city"
                  v-model="cities.cityName"
                  readonly
                />
              </div>
            </div>

            <hr />
            <div class="form-group mt-4">
              <!-- loop from database -->
              <label for="payment-method">Payment Method</label>
              <input
                  type="text"
                  class="form-control border-0"
                  id="payment-method"
                  v-model="payMethod.paymentBank"
                  readonly
                />
            </div>

            <div class="form-group">
              <label for="delivery-courier">Courier</label>
              <input
                  type="text"
                  class="form-control border-0"
                  id="delivery-courier"
                  v-model="courierName"
                  readonly
                />
            </div>

            <div class="form-group">
              <label for="delivery-service">Courier Service</label>
              <input
                  type="text"
                  class="form-control border-0"
                  id="delivery-service"
                  v-model="courierService"
                  readonly
                />
            </div>

            <div class="form-group row pb-4 pt-1">
              <label for="delivery-fee" class="col-sm-3 col-form-label">Delivery Fee</label>
              <div class="col-sm-9">
                  <input
                  type="text"
                  class="form-control form-control-sm border-0"
                  id="delivery-fee"
                  v-model="courierFee"
                  readonly
                />
              </div>
            </div>

            <button class="btn next-btn ml-auto" @click.prevent="onConfirm">Next</button>
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
  components: {
    Navbar,
    Subnav,
    OrderDesc
  },
  data() {
    return {
      token: "",
      street: "",
      courierName: "",
      courierService: "",
      order: null,
      cityId: null,
      courierFee: null,
      provinceId: null,
      paymentMethodId: null,
      cart: [],
      cities: [],
      province: [],
      payMethod: [],
      dataProfile: [],
    }
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
    }
    
    this.street = sessionStorage.getItem("street");
    this.cityId = sessionStorage.getItem("cityId");
    this.provinceId = sessionStorage.getItem("provinceId");
    this.courierName = sessionStorage.getItem("courierName");
    this.courierService = sessionStorage.getItem("courierService");
    this.courierFee = sessionStorage.getItem("courierFee");
    this.paymentMethodId = sessionStorage.getItem("paymentMethodId");
    this.order = sessionStorage.getItem("order");
    this.getProfile();
    this.getCart();
    this.getProvince();
    this.getCity();
    this.getPaymentMethod();
  },
  methods: {
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
    },
    getProvince() {
      const options = {
        url: "https://rpl.abisatria.my.id/api/ongkir/province",
        method: "get"
      };
      axios(options)
        .then(response => {
          let dataProvince = [];
          let prov = response.data.data;
          prov.map(data => {
            if (this.provinceId == data.id) {
              dataProvince.push(data)
            }
          })
          this.province = dataProvince[0];
          console.log("Provinsi : ", this.province);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getCity() {
      const options = {
        url: `https://rpl.abisatria.my.id/api/ongkir/city?provinceId=${this.provinceId}`,
        method: "get"
      };
      axios(options)
        .then(response => {
          let dataCity = [];
          let city = response.data.data;
          city.map(data => {
            if (this.cityId == data.id) {
              dataCity.push(data)
            }
          });
          this.cities = dataCity[0]
          console.log('dataCity',this.cities)
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
          let dataPay = [];
          let pay = response.data.data;
          pay.map(data => {
            if (this.paymentMethodId == data.id) {
              dataPay.push(data)
            }
          })
          this.payMethod = dataPay[0];
          console.log("Payment Method : ", dataPay);
        })
        .catch(e => {
          console.log(e);
        });
    },
    onConfirm: function() {
      if (this.token) {
        let token = this.token;

        let street = this.street;
        let cityId = this.cityId;
        let provinceId = this.provinceId;
        let courierName = this.courierName;
        let courierService = this.courierService;
        let courierFee = this.courierFee;
        let paymentMethodId = this.paymentMethodId;
        let order = this.order.split(',').map(item => {
          return {cartId : parseInt(item)}
        })
        let info = {
          "order" : order,
          "address" : {
            "street" : street,
            "cityId" : cityId,
            "provinceId" : provinceId
          },
          "courier" : {
            "courierName" : courierName,
            "courierService" : courierService,
            "courierFee" : courierFee
          },
          "paymentMethod" : {
            "paymentMethodId" : paymentMethodId
          }
        }
        console.log(info)
        const options = {
          url: "https://rpl.abisatria.my.id/api/core/confirmOrder",
          method: "post",
          data: info,
          headers: {
            authorization: token
          }
        };
        axios(options)
          .then(response => {
            let orderId = response.data.data.order.id
            console.log('onConfirm : ', response.data.data);
            sessionStorage.removeItem("street");
            sessionStorage.removeItem("cityId");
            sessionStorage.removeItem("provinceId");
            sessionStorage.removeItem("courierName");
            sessionStorage.removeItem("courierService");
            sessionStorage.removeItem("courierFee");
            sessionStorage.removeItem("paymentMethodId");
            this.$router.push({
                name: "PaymentPesanan",
                params: {
                  orderId: orderId
                }
              });
          })
          .catch(e => {
            console.log(e.response);
          });
      }
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
.phoneNumber input[type=number] {
  -moz-appearance: textfield;
}
</style>