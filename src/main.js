/* eslint-disable no-new */
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    { path: "/cart", component: Cart }
  ]
});

import Home from "./SMP.vue";
import Login from "./SLP.vue";
import Signup from "./SSP.vue";
import Cart from "./SMC.vue";

new Vue({
  el: "[data-module=app]",
  router,
  components: {
    App,
    Home,
    Login,
    Signup,
    Cart
  }
});
