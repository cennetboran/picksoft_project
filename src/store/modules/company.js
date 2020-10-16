import Vue from "vue";
import {router} from "../../router";

const state = {
  companies: []
}

const getters = {
  getCompanies(state) {
    return state.companies;
  },
  getCompany(state) {
    return key => state.companies.filter(element => {

      console.log(element)
      return element.key == key;
    })
  }
}

const mutations = {
  updateCompanyList(state, company) {
    state.companies.push(company);
  }
}

const actions = {
  initApp({commit}) {
    // Vue Resource İşlemleri...
    Vue.http.get("https://company-5c9e1.firebaseio.com/companies.json")
      .then(response => {
        let data = response.body;
        for (let key in data) {
          data[key].key = key;
          commit("updateCompanyList", data[key]);
        }
      })
  },
  saveCompany({commit}, company) {
    // Vue Resource İşlemleri...
    Vue.http.post("https://company-5c9e1.firebaseio.com/companies.json", company)
      .then((response) => {
        /*********** Şirket listesinin güncellenmesi *********/
        company.key = response.body.name;
        commit("updateCompanyList", company);
        
        router.replace("/")
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
