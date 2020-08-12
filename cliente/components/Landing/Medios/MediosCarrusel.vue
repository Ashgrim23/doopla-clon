<template>
  <no-ssr>
    <carousel-3d
      :disable3d="true"
      :controls-visible="true"
      :space="300"
      :height="300"      
      :bias="center"
      :width="285"
      :border="0"
      :autoplay="true"
      :count="medios.length"
      :autoplayTimeout="5000"
    >
      <slide v-for="(medio,index) in medios" :key="index" :index="index">
        <MediosCard :medio="medio"/>
      </slide>
    </carousel-3d>
  </no-ssr>
</template>
<script>
import MediosCard from "@/components/Landing/Medios/MediosCard";
export default {
  components: {
    MediosCard
  },
  props: {
    medios: {
      type: Array,
      required: true
    }
  }
};
</script>
