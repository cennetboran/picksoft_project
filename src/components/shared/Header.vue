<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #47486e">
    <router-link
      to="/"
      tag="a"
      class="navbar-brand">
      Home
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          active-class="active"
          to="/FirmaList"
          tag="li"
          class="nav-item">
          <a class="nav-link">Firmalar</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
