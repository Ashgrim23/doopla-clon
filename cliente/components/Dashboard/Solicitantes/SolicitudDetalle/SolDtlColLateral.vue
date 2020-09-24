<template>
    <v-col cols="12" md="3"  class="leftCol">
                <div style="padding:10px 10px;text-align:center;">
                    <v-icon size="70" color="rgb(111, 94, 158)">mdi-currency-usd-circle-outline</v-icon>
                    <p>Alias del solicitante</p>
                    <p style="font-size:25px;"><strong>{{solicitud.solicitante}}</strong></p>
                </div>
                <div style="padding:0px 30px;background-color:rgb(64, 249, 155)">
                    <p ><strong>Generalidades</strong></p>
                    <p ><strong>de la solicitud</strong></p>
                </div>
                <div style="padding-left:30px;">
                    <ul>
                        <li><nuxt-link to="#">Perfil del solicitante</nuxt-link></li>                    
                        <li><nuxt-link to="#">Información crediticia</nuxt-link></li>
                        <li><nuxt-link to="#">Finanzas personales</nuxt-link></li>
                        <li><nuxt-link to="#">Pregunta al solicitante</nuxt-link></li>
                    </ul>
                </div>
                <SolDtlCharts v-if="this.isMounted && this.$vuetify.breakpoint.mdAndUp" :solicitud="this.solicitud" :percent="parseFloat(solicitud.statsFondeado.porcFondeado).toFixed(2)"/>
            </v-col>
</template>

<script>
import SolDtlCharts from '@/components/Dashboard/Solicitantes/SolicitudDetalle/SolDtlCharts'
import CirculoGradRsg from '@/components/Dashboard/Solicitantes/CirculoGradRsg'
import PayProgreso from '@/components/Dashboard/Solicitantes/PayProgreso'
export default {
    components:{
        CirculoGradRsg,
        PayProgreso,
        SolDtlCharts

    },
    props:{
        solicitud:{type:Object,required:true},        
    },
    data(){
        return {
            isMounted:false
        }
    },
    mounted(){
        this.isMounted=true
    }
}
</script>


<style scoped>


.leftCol{
    color:white;
    background-color: rgb(160, 153, 179);
    height: 100%;
}

a{
    line-height: 35px;
    text-decoration: none;
}

ul {
    list-style: none;    
}
</style>