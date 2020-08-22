<template>
  <v-row no-gutters style="padding:15px 0;">
    <v-col cols="0" md="1">
      <img class="imgLogo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo.png">
    </v-col>
    <v-col cols="12" md="11">
      <DashOpcLargo/>
    </v-col>
  </v-row>
</template>

<script>
import DashOpcLargo from "@/components/Dashboard/Navigation/DashOpcLargo";
export default {
  components: {
    DashOpcLargo
  }
};
</script>



<style scoped>
.imgLogo {
  width: 185px;
}

@media (max-width: 1120px) {
  .imgLogo {
    display: none !important;
  }
}
</style>

