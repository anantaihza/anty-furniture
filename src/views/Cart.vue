<template>
  <div>
    <navbar />
    <subnav />
    <section id="banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Your Basket</h1>
            <p>2 Items | Rp. 515.000</p>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <div class="row">
                  <div class="col-md-3">
                    <img src="@/assets/cart/Antique-lamp.png" alt />
                  </div>
                  <div class="col-md-6 ml-4 my-auto">
                    <h4>
                      <b>Antique Brass Tripod Floor Lamp</b>
                    </h4>
                    <p>Rp. 235.000</p>
                    <p>Weight : 5.43 Kg</p>
                    <p>Total Weight : 5.43 Kg</p>
                  </div>
                </div>
              </td>
              <td>
                <quantity />
              </td>
              <td>Rp. 235.000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <div class="row">
                  <div class="col-md-3">
                    <img src="@/assets/cart/pello-chair.png" alt />
                  </div>
                  <div class="col-md-6 ml-4 my-auto">
                    <h4>
                      <b>Pello Chair</b>
                    </h4>
                    <p>Rp. 280.000</p>
                    <p>Weight : 9.4 Kg</p>
                    <p>Total Weight : 9.4 Kg</p>
                  </div>
                </div>
              </td>
              <td>
                <quantity />
              </td>
              <td>Rp. 235.000</td>
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
import Quantity from "@/components/Quantity.vue";

export default {
  name: "cart",
  components: {
    Navbar,
    Subnav,
    Quantity
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
</style>