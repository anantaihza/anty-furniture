import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import InfoPesanan from "../views/InfoPesanan.vue";
import ReviewPesanan from "../views/ReviewPesanan.vue";
import PaymentPesanan from "../views/PaymentPesanan.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path:"/cart",
    name: "Cart",
    component: Cart
  },
  {
    path:"/profile",
    name: "Profile",
    component: Profile
  },
  {
    path:"/login",
    name: "Login",
    component: Login
  },
  {
    path:"/register",
    name: "Register",
    component: Register
  },
  {
    path:"/infoPesanan",
    name: "InfoPesanan",
    component: InfoPesanan
  },
  {
    path:"/reviewPesanan",
    name: "ReviewPesanan",
    component: ReviewPesanan
  },
  {
    path:"/paymentPesanan",
    name: "PaymentPesanan",
    component: PaymentPesanan
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
