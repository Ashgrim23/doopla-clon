<template>
  <v-container>
    <v-row>
      <v-col style="text-align:center;">
        <h2 class="dooplaTituloVioleta">¿QUÉ ES DOOPLA?</h2>
      </v-col>
    </v-row>
    <v-row style="justify-content:center; text-align:center;">
      <ConoceDooplaCard :imgURL="img1" :texto="texto1"></ConoceDooplaCard>
      <ConoceDooplaCard :imgURL="img2" :texto="texto2"></ConoceDooplaCard>
      <ConoceDooplaCard :imgURL="img3" :texto="texto3"></ConoceDooplaCard>
      <ConoceDooplaCard :imgURL="img4" :texto="texto4"></ConoceDooplaCard>
      <ConoceDooplaCard :imgURL="img5" :texto="texto5"></ConoceDooplaCard>
    </v-row>    
    <v-row>
      <v-col style="text-align:center;margin-top:3%;">
        <iframe class="video-youtube" src="https://www.youtube.com/embed/UApyUGUpkJU" allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0"></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ConoceDooplaCard from '@/components/Landing/ConoceDoopla/ConoceDooplaCard.vue'
export default {
  name:"ConoceDoopla",
  components:{
    ConoceDooplaCard
  },
  data() {
    return {
      img1:"https://doopla-clone.s3.us-east-2.amazonaws.com/icon-01.png",
      texto1:["Es una","plataforma","tecnológica"],      
      img2:"https://doopla-clone.s3.us-east-2.amazonaws.com/icon-02.png",
      texto2:["Ofrece préstamos","e inversiones directas","entre personas"],
      img3:"https://doopla-clone.s3.us-east-2.amazonaws.com/icon-03.png",
      texto3:["Tasas","de Interés","muy bajas"],
      img4:"https://doopla-clone.s3.us-east-2.amazonaws.com/icon-04.png",
      texto4:["Altos","y mejores","rendimientos"],
      img5:"https://doopla-clone.s3.us-east-2.amazonaws.com/icon-05.png",
      texto5:["Sin","intermediarios","y 100% online"]
    }
  }
    
}
</script>

<style scoped>

  .video-youtube{
    width: 400px;
    height: 250px;
  }

  @media (max-width: 460px) {
    .video-youtube{
      width: 280px;
      height: 200px;
    }
  }

</style>
