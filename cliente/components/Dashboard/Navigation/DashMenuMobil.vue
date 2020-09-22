<template>
  <div style="padding:10px 0;">
    <v-row no-gutters style="align-items:center;">
       <v-col cols="1" style="text-align: center;">
        <button class="navToggle" @click="show=!show">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <br>
        <DashOpcMobil :show="show" @close="show=!show"/>
      </v-col>
      <v-col cols="9" style="text-align: center;">
        <nuxt-link to="/resumen-cuenta-inversionista">
          <img class="imgLogo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo.png">
        </nuxt-link>
      </v-col>      
      <v-col cols="2">
        <v-badge :value="getCartlen>0" :content="getCartlen" overlap left bottom  color="rgb(255,0,0)" style="z-index:100;">
          <nuxt-link to="/Cart">
            <img alt="Inversiones" class="imgCart" src="https://doopla-clone.s3.us-east-2.amazonaws.com/ico-basket.png">          
          </nuxt-link>
        </v-badge>
      </v-col>     
    </v-row>
  </div>
</template>

<script>
import DashOpcMobil from "@/components/Dashboard/Navigation/DashOpcMobil";
export default {
  data() {
    return {
      show: false
    };
  },
  computed:{
    getCartlen(){
      return this.$store.getters.getCart.length 
    }
  }
};
</script>



<style scoped>
.imgCart{
  width: 26px;  
  
}

.navToggle {
  background-color: white;
  padding: 9px 10px;
  border-radius: 4px;
}
.icon-bar {
  background-color: rgb(136, 136, 136);
  outline-color: white;
  display: block;
  height: 2px;
  margin-top: 4px;
  width: 22px;
}

.imgLogo {
  width: 155px;
}
</style>