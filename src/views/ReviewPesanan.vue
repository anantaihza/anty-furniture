<template>
  <div>
    <navbar />
    <subnav />

    <div class="container order-info">
      <div class="row">
        <div class="col-md-6">
          <h2>REVIEW CUSTOMER INFORMATION</h2>
          <form class="customer-info">
            <div class="form-group row">
              <label for="form-name" class="col-sm-3 col-form-label">Name*</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="form-name"
                  value="Example Name"
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="form-email" class="col-sm-3 col-form-label">Email*</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="form-email"
                  value="Example Email"
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="form-address" class="col-sm-3 col-form-label">Address*</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control border-0"
                  id="form-address"
                  value="Example Address"
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="form-phoneNumber" class="col-sm-3 col-form-label">Phone Number*</label>
              <div class="col-sm-9 phoneNumber">
                <input
                  type="number"
                  class="form-control border-0"
                  id="form-phoneNumber"
                  value="08222222222"
                />
              </div>
            </div>
            <hr />
            <div class="form-group mt-4">
              <label for="payment-method">Payment Method</label>
              <select class="form-control border-0" id="payment-method">
                <option>BCA</option>
                <option>Mandiri</option>
                <option>s</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group">
              <label for="delivery-service">Delivery Service</label>
              <select class="form-control border-0" id="delivery-service">
                <option>GO-BOX</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group row pb-4 pt-1">
              <label for="delivery-fee" class="col-sm-3 col-form-label">Delivery Fee</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control form-control-sm border-0"
                  id="delivery-fee"
                  value="Rp. 83.000"
                  readonly
                />
              </div>
            </div>

            <router-link type="button" class="btn next-btn ml-auto" to="/paymentPesanan">Next</router-link>
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

export default {
  name: "info-pesanan",
  components: {
    Navbar,
    Subnav,
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