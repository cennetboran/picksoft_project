
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-6 card mt-5 shadow" >
        <div class="card-body">
          <h3>Firma Listesi</h3>
          <hr>
          <table class="table table-hover table-striped table-bordered" v-if="getCompanies.length > 0">
            <thead>
            <th>id</th>
            <th>Sirket Adı</th>
            </thead>
            <tbody>
              <tr v-for="company in getCompanies" :key="company.id">
                <td class="align-middle text-center"><span class="badge badge-info"> {{ company.key }} </span></td>
                <td class="align-middle text-center"> {{ company.title }}</td>
                <td><button @click="handleClick(company)"> Detay</button></td>

              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br>
            <small>Kayıt Eklemek için Firma İşlemleri menüsünden yararlanabilirsiniz
            </small>
          </div>
        </div>
        <button style="margin-bottom: 15px;" @click="firmaEkle">Firma Ekle</button>
      </div>

    </div>
    <modal v-if="showModal" @close="showModal = false">
        <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  {{company.title}}
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  <table class="table table-hover table-striped table-bordered">
            <thead>
            <th>id</th>
            <th>Sirket Adı</th>
            <th>Harcama Miktarı</th>
            <th>Min Miktar</th>
            <th>Max Miktar</th>
            <th>Açıklama</th>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle text-center"><span class="badge badge-info"> {{ company.key }} </span></td>
                <td class="align-middle text-center"> {{ company.title }}</td>
                <td class="align-middle text-center"> {{ company.spend }}</td>
                <td class="align-middle text-center" :class="getCountClasses(company.min)">{{ company.min }}</td>
                <td style="width: 120px;">{{ company.max | currency  }}</td>
                <td class="align-middle">{{ company.description}}</td>
              </tr>
            </tbody>
          </table>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="closeModal">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
      </modal>
  </div>
</template>


<script>
  import {mapGetters} from "vuex";
  import Vue from "vue";
  import "./style.css"
  import {router} from "../router"

  new Vue({
  render (h) {
    return h('modal', "asdfkashjgfdashd")
  }
})
  export default {
    data(){
      return{
        company: {},
        showModal : false
      }
    },
    computed: {
    ...mapGetters(["getCompanies"]),
    },
    methods : {
      firmaEkle(){
        router.push( {path:"/FirmaEkle"})
      },
      getCountClasses(count){
        return {
          'btn-danger text-white' : count == 0 || count == null,
          'btn-success text-white' : count > 0,
        }
      },

      closeModal(){
        this.showModal = false
      },

      handleClick(company){
        console.log(company)
        this.company  = company
        this.showModal = true
      }
    }
  }
</script>
<style></style>
