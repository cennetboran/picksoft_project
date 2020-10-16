import Vue from "vue";
import Vuex from "vuex";
import company from "./modules/company";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules : {
    company
  }
});
