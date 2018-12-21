import Vue from "vue";
import Router from "vue-router";
import Login from "./Login";
import Home from "./Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "about",
      component: Login
    }
  ]
});
