<template>
  <div>
    <navbar :navHome="true" />
    <div class="container">
      <div class="row">
        <div class="col-md-3 user-foto">
          <font-awesome-icon :icon="['fas', 'user-circle']" />
        </div>
        <div class="col-md-9 my-auto">
          <h1>User1510</h1>
          <div class="col-3 pl-0">
            <!-- <button type="button" class="btn btn-warning btn-sm btn-block">Edit Profile</button> -->
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
                          <label for="form-name" class="col-sm-3 col-form-label">Name*</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control border-0"
                              id="form-name"
                              placeholder
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label
                            for="form-phoneNumber"
                            class="col-sm-3 col-form-label"
                          >Phone Number*</label>
                          <div class="col-sm-9 phoneNumber">
                            <input
                              type="number"
                              class="form-control border-0"
                              id="form-phoneNumber"
                              placeholder
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

            <!-- <button type="button" class="btn btn-warning btn-sm btn-block">Setting</button> -->

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
                        >Reset Email</button>

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
                                <h5 class="modal-title" id="exampleModalLabel">Reset Email</h5>
                                <div class="container mt-4 pt-3">
                                  <form class="container customer-info px-auto">
                                    <div class="form-group row">
                                      <label for="form-email" class="col-sm-3 col-form-label">Email</label>
                                      <div class="col-sm-9">
                                        <input
                                          type="email"
                                          class="form-control border-0"
                                          id="form-email"
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
                        <!-- Button trigger reset password -->
                        <button
                          type="button"
                          class="btn btn-warning btn-lg btn-block"
                          data-toggle="modal"
                          data-target="#resPassword"
                        >Reset Password</button>

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
                                <h5 class="modal-title" id="exampleModalLabel">Reset Password</h5>
                                <div class="container mt-4 pt-3">
                                  <form class="container customer-info px-auto">
                                    <div class="form-group row">
                                      <label
                                        for="form-password"
                                        class="col-sm-3 col-form-label"
                                      >Password</label>
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
      <!-- <button class="btn btn-warning btn-lg">Delivery Status</button> -->
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
        <h2>History</h2>
        <div class="row text-center py-3">
          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <button type="button" class="btn prod">
              <div class="card">
                <div class="card-body">
                  <img src="@/assets/showroom/charmen-sofa.png" class="card-img-top" alt />
                  <h4 class="pt-3">rfbv</h4>
                  <price :value="40000" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Price from "@/components/Price.vue";

export default {
  name: "profile",
  components: {
    Navbar,
    Price
  },
  data() {
    return {
      token: ""
    };
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.token = token;
      console.log("mengakses dengan token");
    }
  },
  methods: {
    logout: function() {
      localStorage.removeItem("access_token");

      this.$router.push({
        name: "Landing"
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