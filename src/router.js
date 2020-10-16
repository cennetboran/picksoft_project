import Vue from "vue";
import FirmaEkle from "./components/FirmaEkle"
import FirmaList from "./components/FirmaList"
import Home from "./components/Home"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path : "/", component : Home },
  { path : "/FirmaEkle", component: FirmaEkle},
  { path : "/FirmaList", component : FirmaList },
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  mode : "history",
  routes
});
