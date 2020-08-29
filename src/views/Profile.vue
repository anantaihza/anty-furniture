<template>
  <div>
    <navbar :navHome="true" />
    <div class="container">
      <div class="row">
        <div class="col-md-3 user-foto">
          <font-awesome-icon :icon="['fas', 'user-circle']" />
        </div>
        <div class="col-md-9 my-auto">
          <h1>{{ dataProfile.name }}</h1>
          <div class="col-3 pl-0">
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-warning btn-sm btn-block mb-2"
              data-toggle="modal"
              data-target="#editProfile"
            >Edit Profile</button>
            <!-- Modal -->
            <div
              class="modal fade"
              id="editProfile"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>

                    <h5 class="modal-title" id="exampleModalLongTitle">Edit Profile</h5>
                    <div class="text-center">
                      <div class="user-foto mx-auto text-center">
                        <font-awesome-icon :icon="['fas', 'user-circle']" />
                      </div>
                      <a class="text-center" href>Change Photo</a>
                    </div>

                    <div class="container mt-4 pt-3">
                      <form class="container customer-info px-auto">
                        <div class="form-group row">
                          <label for="form-name" class="col-sm-3 col-form-label">Name</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control border-0"
                              id="form-name"
                              v-model="dataProfile.name"
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
                            />
                          </div>
                        </div>

                        <div class="pt-4 pb-4 mx-auto text-right">
                          <button @click="updateProfile" class="btn btn-warning">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-warning btn-sm btn-block mb-2"
              data-toggle="modal"
              data-target="#setting"
            >Setting</button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="setting"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 class="modal-title" id="exampleModalLongTitle">Setting</h5>

                    <div class="containertext-center mt-4">
                      <div class="d-block col-lg-6 mx-auto py-3">
                        <!-- Button trigger reset Email -->
                        <button
                          type="button"
                          class="btn btn-warning btn-lg btn-block"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >Change Email</button>

                        <!-- Modal reset Email-->
                        <div
                          class="modal"
                          id="exampleModal"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                              <div class="modal-body">
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 class="modal-title" id="exampleModalLabel">Change Email</h5>
                                <div class="container mt-4 pt-3">
                                  <form class="container customer-info px-auto">
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
                                      <label
                                        for="form-newEmail"
                                        class="col-sm-3 col-form-label"
                                      >New Email</label>
                                      <div class="col-sm-9">
                                        <input
                                          type="email"
                                          class="form-control border-0"
                                          id="form-newEmail"
                                          v-model="dataProfile.email"
                                        />
                                      </div>
                                    </div>

                                    <div class="pt-4 pb-4 mx-auto text-right">
                                      <button @click="updateEmail" class="btn btn-warning">Save</button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-block col-lg-6 mx-auto py-3">
                        <!-- Button trigger reset password -->
                        <button
                          type="button"
                          class="btn btn-warning btn-lg btn-block"
                          data-toggle="modal"
                          data-target="#resPassword"
                        >Change Password</button>

                        <!-- Modal reset password-->
                        <div
                          class="modal"
                          id="resPassword"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                              <div class="modal-body">
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 class="modal-title" id="exampleModalLabel">Change Password</h5>
                                <div class="container mt-4 pt-3">
                                  <form class="container customer-info px-auto">
                                    <div class="form-group row">
                                      <label
                                        for="form-password"
                                        class="col-sm-3 col-form-label"
                                      >Old Password</label>
                                      <div class="col-sm-9">
                                        <input
                                          type="Password"
                                          class="form-control border-0"
                                          id="form-password"
                                        />
                                      </div>
                                    </div>

                                    <div class="form-group row">
                                      <label
                                        for="form-newPassword"
                                        class="col-sm-3 col-form-label"
                                      >New Password</label>
                                      <div class="col-sm-9">
                                        <input
                                          type="password"
                                          class="form-control border-0"
                                          id="form-newPassword"
                                        />
                                      </div>
                                    </div>

                                    <div class="form-group row">
                                      <label
                                        for="form-confirmNewPassword"
                                        class="col-sm-3 col-form-label"
                                      >Confirm New Password</label>
                                      <div class="col-sm-9">
                                        <input
                                          type="password"
                                          class="form-control border-0"
                                          id="form-confirmNewPassword"
                                        />
                                      </div>
                                    </div>

                                    <div class="pt-4 pb-4 mx-auto text-right">
                                      <button class="btn btn-warning">Save</button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-block col-lg-6 mx-auto py-3">
                        <button
                          class="btn btn-warning btn-lg btn-block"
                          data-dismiss="modal"
                          @click="logout"
                        >Logout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="d-block d-sm-block d-md-block d-lg-none" />

      <!-- Button trigger modal delivery -->
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target="#delivery"
      >Delivery Status</button>

      <!-- Modal delivery -->
      <div
        class="modal fade"
        id="delivery"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 class="modal-title" id="exampleModalLabel">Delivery Status</h5>
              <div class="container mt-4">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Item</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="mt-4 pt-3">
        <h2>Ongoing</h2>
        <div class="row text-center py-3">
          <div class="col-lg-3 col-md-4 col-sm-6 col-6" v-for="item in ongoingOrder" :key="item.id">
            <button @click="onOngoing(item.orderId)" type="button" class="btn prod">
              <div class="card">
                <div class="card-body">
                  <img
                    v-bind="{ src : item.product.productphotos[0].urlPhoto, alt : item.product.productName }"
                    class="card-img-top"
                  />
                  <h4 class="pt-3">{{ item.product.productName }}</h4>
                  <price :value="item.product.productPrice" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="mt-4 pt-3">
        <div v-if="!historyOrder.length == 0">
          <h2>History</h2>
          <div class="row text-center py-3">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-6"
              v-for="item in historyOrder"
              :key="item.id"
            >
              <button type="button" class="btn prod">
                <div class="card">
                  <div class="card-body">
                    <img
                      v-bind="{ src : item.product.productphotos[0].urlPhoto, alt : item.product.productName }"
                      class="card-img-top"
                    />
                    <h4 class="pt-3">{{ item.product.productName }}</h4>
                    <price :value="item.product.productPrice" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Price from "@/components/Price.vue";
import axios from "axios";

export default {
  name: "profile",
  components: {
    Navbar,
    Price
  },
  data() {
    return {
      token: "",
      dataProfile: [],
      ongoingOrder: [],
      historyOrder: []
    };
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
    }
    this.getProfile();
    this.getOngoingOrder();
    this.getHistoryOrder();
  },
  methods: {
    logout: function() {
      localStorage.removeItem("access_token");
      this.$router.push({
        name: "Landing"
      });
    },
    onOngoing: function(id) {
      const options = {
        url:
          "https://rpl.abisatria.my.id/api/customer/information/order?condition=ongoing",
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          let resOngoing = response.data.data;
          console.log("Ongoing cek : ", response.data.data);
          let i = 0;
          let check = false;
          let idTmp;
          while (i < resOngoing.length && check == false) {
            if (resOngoing[i].id == id) {
              check = true;
              idTmp = i;
            }
            i++;
          }
          if (resOngoing[idTmp].order_statuses[0].statusType == 1) {
            this.$router.push({
              name: "PaymentPesanan",
              params: {
                orderId: id
              }
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateProfile: function() {
      let name = this.dataProfile.name;
      let phone = this.dataProfile.phone;
      const options = {
        url: `https://rpl.abisatria.my.id/api/customer/profile`,
        method: "patch",
        data: {
          name,
          phone
        },
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          this.getProfile();
          console.log("Update Profile", response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateEmail: function() {
      let email = this.dataProfile.email;
      const options = {
        url: `https://rpl.abisatria.my.id/api/customer/profile/email`,
        method: "patch",
        data: {
          email
        },
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          this.getProfile();
          console.log("Update Email : ", response.data);
        })
        .catch(e => {
          console.log(e.response);
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
          console.log("Data Profile : ", this.dataProfile);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getOngoingOrder() {
      const options = {
        url:
          "https://rpl.abisatria.my.id/api/customer/information/order?condition=ongoing",
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          console.log("Ongoing Order : ", response.data.data);
          let prodOngoing = [];
          let dataOngoing = response.data.data;
          dataOngoing.map(data => {
            data.carts.map(prod => {
              prodOngoing.push(prod);
            });
          });
          this.ongoingOrder = prodOngoing;
          console.log("Product Ongoing : ", this.ongoingOrder);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getHistoryOrder() {
      const options = {
        url:
          "https://rpl.abisatria.my.id/api/customer/information/order?condition=history",
        method: "get",
        headers: {
          authorization: this.token
        }
      };
      axios(options)
        .then(response => {
          console.log("History Order : ", response.data.data);
          let prodHistory = [];
          let dataHistory = response.data.data;
          dataHistory.map(data => {
            data.carts.map(prod => {
              prodHistory.push(prod);
            });
          });
          this.historyOrder = prodHistory;
          console.log("Product History : ", this.historyOrder);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.user-foto {
  color: rgba(0, 0, 0, 0.54);
  font-size: 180px;
}
.card:hover {
  background: rgb(235, 235, 235);
}
.card {
  border: none;
}
.card-body img {
  width: 100%;
  display: block;
  margin: auto;
  height: 12vw;
  object-fit: contain;
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
.customer-info input,
.customer-info select {
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}
.customer-info label {
  font-weight: 600;
}
</style>