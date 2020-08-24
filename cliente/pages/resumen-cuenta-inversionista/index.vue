<template>
    <v-container >
        <v-row style="justify-content:center"><p class="tx-purp1" style="font-size:1.8rem;font-weight:900;">RESUMEN</p></v-row>
        <v-row style="justify-content:center;background-color:rgb(237,237,237)">
        <ResumenLeft/>
        <ResumenRight/>
        </v-row>
    </v-container>
</template>

<script>
import ResumenLeft from '@/components/Dashboard/ResumenCuenta/ResumenLeft'
import ResumenRight from '@/components/Dashboard/ResumenCuenta/ResumenRight'
export default {
   components:{
       ResumenLeft
   }
}
</script>

