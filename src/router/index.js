import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Landing from "../views/Landing.vue";
import Product from "../views/Product.vue";
import BedRoom from "../views/BedRoom.vue";
import Kitchen from "../views/Kitchen.vue";
import Outdoor from "../views/Outdoor.vue";
import Register from "../views/Register.vue";
import Bathroom from "../views/Bathroom.vue";
import DiningRoom from "../views/DiningRoom.vue";
import LivingRoom from "../views/LivingRoom.vue";
import InfoPesanan from "../views/InfoPesanan.vue";
import ReviewPesanan from "../views/ReviewPesanan.vue";
import PaymentPesanan from "../views/PaymentPesanan.vue";
import ForgetPass from "../views/ForgetPass.vue";
import ConfirmForgetPass from "../views/ConfirmForgetPass.vue";

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
  },
  {
    path:"/product",
    name: "Product",
    component: Product
  },
  {
    path:"/living-room",
    name: "LivingRoom",
    component: LivingRoom
  },
  {
    path:"/dining-room",
    name: "DiningRoom",
    component: DiningRoom
  },
  {
    path:"/bedroom",
    name: "BedRoom",
    component: BedRoom
  },
  {
    path:"/kitchen",
    name: "Kitchen",
    component: Kitchen
  },
  {
    path:"/bathroom",
    name: "Bathroom",
    component: Bathroom
  },
  {
    path:"/outdoor",
    name: "Outdoor",
    component: Outdoor
  },
  {
    path:"/forgetpass",
    name: "ForgetPass",
    component: ForgetPass
  },
  {
    path:"/confirmforgetpass",
    name: "ConfirmForgetPass",
    component: ConfirmForgetPass
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
