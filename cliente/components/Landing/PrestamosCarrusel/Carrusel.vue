<template>
  <v-col>
    <no-ssr>
    <carousel-3d
      :perspective="0"
      :space="410"
      :display="3"
      :autoplay="true"
      :controlsVisible="true"
      :autoplayTimeout="5000"    >
      <slide v-for="(prestamo,idx) in datos" :key="idx" :index="idx">
        <PrestamosCard :prestamo="prestamo"/>
      </slide>
    </carousel-3d>
    </no-ssr>
  </v-col>
</template>

<script>
import PrestamosCard from "@/components/Landing/PrestamosCarrusel/PrestamosCard";
export default {
  components: {
    PrestamosCard
  },
  props: {
    datos: {
      type: Array,
      required: true
    }
  }
};
</script>
