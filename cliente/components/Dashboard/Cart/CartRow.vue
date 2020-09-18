<template>
     <v-row class="innerCartRow" dense>         
        <v-col cols="1" class="cartCell" >    
            
                <v-icon color="rgb(87,70,123)">mdi-cash-multiple</v-icon> 
                &nbsp;
            <span class="tx-purp1" style="font-weight:900;">{{this.inversion.solicitud.solicitante}}</span>            
        </v-col>
        <v-col cols="1" class="cartCell" style="justify-content:center;">
            <CirculoGradRsg
                medida="26"
                :gradoRiesgo="this.inversion.solicitud.gradoRiesgo"/>
        </v-col>
        <v-col cols="1" class="cartCell" style="justify-content:center;">
            <p style="font-size:14px;">{{this.inversion.solicitud.tasaInteres}}%</p>
        </v-col>
        <v-col cols="1" class="cartCell" style="justify-content:center;">
            <p style="font-size:14px;">${{this.inversion.solicitud.monto.toLocaleString()}}.00</p>
        </v-col >
        <v-col cols="1" class="cartCell" style="justify-content:center;">
            <p style="font-size:14px;">$0.00</p>
        </v-col>
        <v-col cols="1" class="cartCell" style="justify-content:center;">
            <p style="font-size:14px;">{{this.inversion.solicitud.plazo}}</p>
        </v-col>
        <v-col cols="2" class="cartCell" style="flex-direction:column;justify-content:center;">
            <p style="font-size:14px;">Consolidar</p>
            <p style="font-size:14px;">deudas</p>
        </v-col>
        <v-col cols="4" class="cartCell" style="justify-content:center" >
            <span  class="invTot">${{this.inversion.montoInversion.toLocaleString()}}</span>
            
            <v-dialog max-width="800px"  v-model="dlgDetalle"  transition="slide-y-transition">
                <template v-slot:activator="{on,attrs}">
                    <v-btn class="greenBtn detailBtn" v-bind="attrs" v-on="on">ver detalle</v-btn>                            
                </template>
                <SolicitudDetalle @close="dlgDetalle=false" :solicitud="inversion.solicitud" @invertido="onInvertido"/>
            </v-dialog>
            <v-icon color="rgb(87,70,123)">mdi-close-circle</v-icon>
        </v-col>
    </v-row>
</template>

<script>
import SolicitudDetalle from '@/components/Dashboard/Solicitantes/SolicitudDetalle/SolicitudDetalle'
import CirculoGradRsg from '@/components/Dashboard/Solicitantes/CirculoGradRsg'
export default {
    data(){
        return {
            dlgDetalle:false
        }
    },
    components:{
        CirculoGradRsg,
        SolicitudDetalle
    },
    props:{
        inversion:{type:Object,required:true}
    }
}
</script>


<style >

.detailBtn .v-btn__content {
    color:rgb(87,70,123) !important;
}

.detailBtn {
    border-radius: 5px !important;
    height: 20px !important;
    padding: 0px 7px !important;    
    width: auto !important;
    font-size: 9px;
    margin: 0 10px;
}

.invTot{
    cursor: not-allowed; 
    background-color: white;
    display: inline-block;
    padding:2px 4px;
    border:solid 1px rgb(184,184,229) ;
    border-radius: 5px;
    width: 116px;
    text-align: right;
    vertical-align: middle;
}

.cartCell {    
    display: flex;    
    align-items: center;
}
.innerCartRow{
    margin-top:5px;
    background-color: rgb(232, 232, 232);
    border-radius: 5px;
    justify-content: center;
    text-align: center;
}</style>