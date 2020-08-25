<template>
  <v-main data-app>
    <v-container>
      <v-row style="justify-content:center">
        <p class="tx-purp1" style="font-size:1.8rem;font-weight:900;">RESUMEN</p>
      </v-row>
      <div style="background-color:rgb(237,237,237)">
        <v-row style="justify-content:center;padding: 17px  33px;padding-bottom:0;">
          <ResumenLeft/>
          <ResumenRight/>
        </v-row>

        <ResumenFooter/>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import ResumenFooter from "@/components/Dashboard/ResumenCuenta/ResumenFooter";
import ResumenLeft from "@/components/Dashboard/ResumenCuenta/ResumenLeft";
import ResumenRight from "@/components/Dashboard/ResumenCuenta/ResumenRight";
export default {
  components: {
    ResumenLeft,
    ResumenRight,
    ResumenFooter
  }
};
</script>

