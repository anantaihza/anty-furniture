<template>
  <div>
    <h2>CUSTOMER INFORMATION</h2>
    <form class="customer-info">
      <div class="form-group row">
        <label for="form-name" class="col-sm-3 col-form-label">Name*</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control border-0"
            id="form-name"
            v-model="name"
            placeholder="Insert your full name"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="form-email" class="col-sm-3 col-form-label">Email*</label>
        <div class="col-sm-9">
          <input
            type="email"
            class="form-control border-0"
            id="form-email"
            v-model="email"
            placeholder="Insert your email address"
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
            v-model="address"
            placeholder="Insert your address"
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
            v-model="number"
            placeholder="Insert your phone number"
          />
        </div>
      </div>
      <hr />
      <div class="form-group mt-4">
        <!-- loop from database -->
        <label for="payment-method">Payment Method</label>
        <select class="form-control border-0" id="payment-method" v-model="paymentMethod">
          <option>BCA</option>  
          <option>Mandiri</option>
          <option>s</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div class="form-group">
        <!-- loop from database -->
        <label for="delivery-service">Delivery Service</label>
        <select class="form-control border-0" id="delivery-service" v-model="deliveryService">
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

      <router-link type="button" class="btn next-btn ml-auto" to="/reviewPesanan">Next</router-link>
    </form>
  </div>
</template>

<script>
// import Quantity from "@/components/Quantity.vue";
// import Footers from "@/components/Footers.vue";

export default {
  name: "info-customer",
  data() {
    return {
      name: "",
      email: "",
      address: "",
      number: "",
      paymentMethod: "",
      deliveryService: "",
      
    }
  },
};
</script>

<style scoped>
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
</style>