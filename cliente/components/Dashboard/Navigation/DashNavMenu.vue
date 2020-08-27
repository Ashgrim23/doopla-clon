<template>
  <v-container fluid>     
      <DashMenuLargo v-if="this.isMounted && this.$vuetify.breakpoint.mdAndUp" />
      <DashMenuMobil v-if="this.isMounted && this.$vuetify.breakpoint.smAndDown" />
    
  </v-container>
</template>

<script>
import DashMenuMobil from "@/components/Dashboard/Navigation/DashMenuMobil"
import DashMenuLargo from "@/components/Dashboard/Navigation/DashMenuLargo";
export default {
  components: {
    DashMenuLargo,
    DashMenuMobil
  },
  data(){
    return {
      isMounted:false
    }
  },
  mounted(){
    this.isMounted=true
  }
};
</script>


<style scoped>
.container {
  background-color: rgb(87, 70, 123);
  padding-left: 45px;
  padding-bottom: 0px;
  padding-top: 0px;
  padding-right: 0px;
}

@media (max-width: 960px) {
}

@media (max-width: 1120px) {
}

@media (max-width: 1200px) {
  .container {
    padding-left: 10px;
  }
}
</style>


