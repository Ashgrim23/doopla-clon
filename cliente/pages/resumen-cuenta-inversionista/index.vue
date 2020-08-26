<template>
  <v-main data-app>
    <v-container>
      <v-row style="justify-content:center">
        <p class="tx-purp1" style="font-size:1.8rem;font-weight:900;">RESUMEN</p>
      </v-row>
      <ResumenCuenta/>      
    </v-container>
  </v-main>
</template>

<script>
import ResumenCuenta from "@/components/Dashboard/ResumenCuenta/ResumenCuenta";

export default {
  components: {
    ResumenCuenta,

  }
};
</script>

