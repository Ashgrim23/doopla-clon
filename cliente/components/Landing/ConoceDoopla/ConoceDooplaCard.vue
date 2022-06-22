<template>
  <v-col cols="auto" lg="2" class="cardCol">
    <img :src="imgURL">
    <p  v-for="(linea,index) in texto" :key="index" class="tx-purp1">
      {{linea}}      
    </p>
  </v-col>
</template>

<script>
export default {
  name:"ConoceDooplaCard",
    props:{
      imgURL: {
        type: String,
        required: true
      },
      texto:{
        type:Array,
        required:true      
      }
    }    
}
</script>

<style scoped>

.cardCol {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top:0px;
    margin-bottom: 0px;
}

</style>

