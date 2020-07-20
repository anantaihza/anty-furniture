<template>
  <div>
    <h2>CUSTOMER INFORMATION</h2>
    <form class="customer-info">
      <div class="form-group row">
        <label for="form-name" class="col-sm-3 col-form-label">Name*</label>
        <div class="col-sm-9">
          <input type="text" class="form-control border-0" id="form-name" value="Example Name" />
        </div>
      </div>

      <div class="form-group row">
        <label for="form-email" class="col-sm-3 col-form-label">Email*</label>
        <div class="col-sm-9">
          <input type="text" class="form-control border-0" id="form-email" value="Example Email" />
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

      <button type="button" class="btn next-btn ml-auto">Next</button>
    </form>
  </div>
</template>

<script>
// import Quantity from "@/components/Quantity.vue";
// import Footers from "@/components/Footers.vue";

export default {
  name: "review-customer"
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