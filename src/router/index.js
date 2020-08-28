import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import Search from "../views/Search.vue";
import Landing from "../views/Landing.vue";
import Product from "../views/Product.vue";
import Profile from "../views/Profile.vue";
import Showroom from "../views/Showroom.vue";
import Register from "../views/Register.vue";
import ForgetPass from "../views/ForgetPass.vue";
import InfoPesanan from "../views/InfoPesanan.vue";
import ReviewPesanan from "../views/ReviewPesanan.vue";
import PaymentPesanan from "../views/PaymentPesanan.vue";
import ConfirmForgetPass from "../views/ConfirmForgetPass.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/infoPesanan",
    name: "InfoPesanan",
    component: InfoPesanan
  },
  {
    path: "/reviewPesanan",
    name: "ReviewPesanan",
    component: ReviewPesanan
  },
  {
    path: "/paymentPesanan",
    name: "PaymentPesanan",
    component: PaymentPesanan
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product
  },
  {
    path: "/showroom/:id",
    name: "Showroom",
    component: Showroom
  },
  {
    path: "/forgetpass",
    name: "ForgetPass",
    component: ForgetPass
  },
  {
    path: "/confirmforgetpass",
    name: "ConfirmForgetPass",
    component: ConfirmForgetPass
  },
  {
    path: "/search/:key",
    name: "Search",
    component: Search
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
