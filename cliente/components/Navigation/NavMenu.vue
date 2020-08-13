<template>
  <v-row class="rowMenu">    
    <v-spacer></v-spacer>
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/">INICIO</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="#sec-2">CONOCE DOOPLA</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="#sec-4">CONOCE PRÉSTAMOS</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="#sec-5">MEDIOS</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="#">INGRESAR</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/registrate">REGISTRO</nuxt-link>
      </li>
    </ul>
  </v-row>
</template>




<style scoped>

.nav-item {
  margin: 0 10px;
  font-weight: 700;
}

.nav-item a{
  text-decoration: none;  
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 14px;
  margin-top: 6%;
}

@media (max-width: 767px) {
  .rowMenu {
    display: none;
  }
}

@media (max-width: 992px) {
  .nav-list {
    margin-top: 2%;
    margin-bottom: 3%;
  }
}
</style>