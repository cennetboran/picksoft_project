<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow" style="margin-bottom : 50px">
        <div class="card-body">
          <h3>Firma İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Firma Adı</label>
            <input
              v-model="company.title"
              type="text"
              class="form-control"
              placeholder="Firma adını giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Firma Harcama Miktarı</label>
            <input
              v-model="company.spend"
              type="number"
              class="form-control"
              placeholder="Firma harcama giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Firma Min. Miktar</label>
            <input
              v-model="company.min"
              type="number"
              class="form-control"
              placeholder="Firma min fiyatı giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Firma Max. Miktar</label>
            <input
              v-model="company.max"
              type="number"
              class="form-control"
              placeholder="Firma max fiyatı giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              v-model="company.description"
              cols="30"
              rows="5"
              placeholder="Firmaya ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button class="btn btn-primary" :disabled="saveEnabled" @click="saveCompany">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      company: {
        title: "",
        spend: null,
        min: null,
        max: null,
        description: ""
      },
      saveButtonClicked: false
    };
  },
  methods: {
    saveCompany() {
      if (this.company.min < this.company.max) {
        this.saveButtonClicked = true;
        this.$store.dispatch("saveCompany", this.company);
      } else {
        alert("minimum değer maximum değerden az olmalı");
      }
    }
  },
  computed: {
    saveEnabled() {
      if (
        this.company.spend > 0 &&
        this.company.title.length > 0 &&
        this.company.min > 0 &&
        this.company.max > 0 &&
        this.company.description.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
    isLoading() {
      if (this.saveButtonClicked) {
        return {
          display: "block"
        };
      } else {
        return {
          display: "none"
        };
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.company.title.length > 0 ||
        this.company.count > 0 ||
        this.company.price > 0 ||
        this.company.description.length > 0) &&
      !this.saveButtonClicked
    ) {
      if (
        confirm(
          "Kaydedilmemiş değişiklikler var. Yine de çıkmak istiyor musunuz?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>
<style></style>
