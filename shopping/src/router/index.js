
import Vue from "vue";
import VueRouter from "vue-router";
import huawei from "../views/huawei.vue";
import mi from "../views/mi.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "huawei",
    component: huawei
  }, {
    path: "/mi",
    name: "mi",
    component: mi
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
