import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../views/Projects.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
    meta: { title: "Projects" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name} - ${process.env.VUE_APP_TITLE} `;
  next();
});
export default router;
