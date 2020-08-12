<template>
  <v-container class="medioCard">
    <v-row no-gutter>
      <v-col class="logoCol">
        <img class="medioLogo" :src="medio.logo" />
      </v-col>
    </v-row>
    <v-row no-gutter>
      <v-col>
        <p class="tx-purp1 desc">{{medio.desc}}</p>
      </v-col>
    </v-row>
    <v-row no-gutter>
      <v-col class="linkCol">
        <a class="tx-purp1" style="font-weight: 900;" :href="medio.link" target="_blank">Ver más</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    medio: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.desc {
  text-align: center;
  font-size: 14px;
  
}

.linkCol {
  text-align: center;
  position: absolute;
  bottom: 0;
}

.logoCol {
  text-align: center;
  padding: 0;
}
.medioCard {
  background-color: white;
  height: 100%;
}

.medioLogo {
  width: 180px;
  height: 180px;
}
</style>
