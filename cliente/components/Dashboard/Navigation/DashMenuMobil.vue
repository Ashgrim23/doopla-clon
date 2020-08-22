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
      <v-col cols="10" style="text-align: center;">
        <img class="imgLogo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo.png">
      </v-col>
      
      <v-col cols="1">
      
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
  }
};
</script>



<style scoped>
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