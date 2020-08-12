<template>
  <v-container>
    <v-row>
      <v-col style="text-align:center;">
        <h2 class="dooplaTituloVioleta">ALIADOS DOOPLA</h2>
      </v-col>
    </v-row>
    <v-row>
      <AfiliadosGrid/>
    </v-row>
    <v-row>
      <v-col style="text-align:center;">
        <a href="https://www.youtube.com/channel/UCflGuS8jphDzOYyPMv7bQcw/" target="_blank">
          <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/redes-1.png">
        </a>
        <a href="https://www.facebook.com/DooplaMexico/" target="_blank">
          <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/redes-2.png">
        </a>
        <a class="link-reds" href="https://twitter.com/dooplamx/" target="_blank">
          <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/redes-3.png">
        </a>
        <a class="link-reds" href="https://www.linkedin.com/company/9283437/" target="_blank">
          <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/redes-4.png">
        </a>
        <a class="link-reds" href="https://blog.doopla.mx/" target="_blank">
          <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/redes-5.png">
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AfiliadosGrid from "@/components/Landing/Afiliados/AfiliadosGrid";
export default {
  components: {
    AfiliadosGrid
  }
};
</script>

