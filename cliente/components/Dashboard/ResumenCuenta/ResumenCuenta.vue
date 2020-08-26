<template>
  <v-container style="background-color:rgb(237,237,237);padding:12px 24px;">
    <ResumenRow1/>
    <ResumenRow2/>
    <ResumenRow3/>    
    <ResumenFooter/>
    
    <v-row></v-row>
  </v-container>
</template>

<script>
import ResumenRow1 from '@/components/Dashboard/ResumenCuenta/ResumenRow1'
import ResumenRow2 from '@/components/Dashboard/ResumenCuenta/ResumenRow2'
import ResumenRow3 from '@/components/Dashboard/ResumenCuenta/ResumenRow3'
import ResumenFooter from "@/components/Dashboard/ResumenCuenta/ResumenFooter";
export default {
    components: {
        ResumenRow1,
        ResumenRow2,
        ResumenRow3,
        ResumenFooter
    }
}
</script>

<style scoped>
 .colResumen {
     padding:2px !important;
 }
 
</style>
