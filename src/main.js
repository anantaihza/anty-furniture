/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//Bootstrap 4
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUserCircle,
  faArrowLeft,
  faGift
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);
library.add(faSearch);
library.add(faShoppingCart);
library.add(faUserCircle);
library.add(faArrowLeft);
library.add(faGift);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
