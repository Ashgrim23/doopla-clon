<template>
    <div style="width:100%">
        <v-row class="innerCartRow" dense>         
            <v-col cols="1" class="cartCell" >                    
                <v-icon color="rgb(87,70,123)">mdi-cash-multiple</v-icon> 
                &nbsp;
                <span class="tx-purp1" style="font-weight:900;">{{this.solicitud.solicitante}}</span>            
            </v-col>
            <v-col cols="1" class="cartCell" style="justify-content:center;">
                <CirculoGradRsg
                    medida="26"
                    :gradoRiesgo="this.solicitud.gradoRiesgo"/>
            </v-col>
            <v-col cols="1" class="cartCell" style="justify-content:center;">
                <p style="font-size:14px;">{{this.solicitud.tasaInteres}}%</p>
            </v-col>
            <v-col cols="1" class="cartCell" style="justify-content:center;">
                <p style="font-size:14px;">${{this.solicitud.monto.toLocaleString()}}.00</p>
            </v-col >
            <v-col cols="1" class="cartCell" style="justify-content:center;">
                <p style="font-size:14px;">${{(this.solicitud.monto-this.solicitud.statsFondeado.montoFondeado).toLocaleString()}}</p>
            </v-col>
            <v-col cols="1" class="cartCell" style="justify-content:center;">
                <p style="font-size:14px;">{{this.solicitud.plazo}}</p>
            </v-col>
            <v-col cols="2" class="cartCell" style="flex-direction:column;justify-content:center;">
                <p style="font-size:14px;">Consolidar</p>
                <p style="font-size:14px;">deudas</p>
            </v-col>
            <v-col cols="4" class="cartCell" style="justify-content:center" >
                <template v-if="this.isCanasta" >
                    <span  class="invTot">${{this.solicitud.montoInversion.toLocaleString()}}</span>
                </template>                
                <v-dialog max-width="800px"  v-model="dlgDetalle"  transition="slide-y-transition">
                    <template v-slot:activator="{on,attrs}">
                        <v-btn class="greenBtn detailBtn" v-bind="attrs" v-on="on">ver detalle</v-btn>                            
                    </template>
                    <SolicitudDetalle @close="dlgDetalle=false" :solicitud="solicitud" @invertido="onInvertido"/>
                </v-dialog>
                
                <v-dialog v-if="!this.isCanasta" :fullscreen="$vuetify.breakpoint.xsOnly" max-width="500px"  v-model="dlgInverte"  transition="slide-y-transition">
                    <template v-slot:activator="{on,attrs}">                        
                        <v-btn class="purpleBtn invierteBtn" v-bind="attrs" v-on="on">invertir</v-btn>
                    </template>                            
                    <DialogInvierte  v-if="getEfectivo>=250" :solicitud="solicitud" :efectivo="getEfectivo"  @close="dlgInverte=false" @invertido="onInvertido"/>
                    <DialogInvierteError v-if="getEfectivo<250 && dlgInverte==true " @close="dlgInverte=false"/>
                </v-dialog>
                <v-dialog v-if="!this.isCanasta" max-width="500px" :fullscreen="$vuetify.breakpoint.xsOnly"  v-model="dlgListo"  transition="slide-y-transition">
                    <DialogInvierteListo @close="dlgListo=false"/>
                </v-dialog>                
                <v-icon v-if="this.isCanasta" color="rgb(87,70,123)" @click="onRemove(solicitud)">mdi-close-circle</v-icon>
            </v-col>            
        </v-row>    
        <v-row style="background-color:white;padding-bottom:10px;"> 
            <v-col cols="12">
                <ProgressBar :percent="solicitud.statsFondeado.porcFondeado"/>
            </v-col>
        </v-row>    
    </div>
    
</template>

<script>
import DialogInvierteListo from '@/components/Dashboard/Solicitantes/DialogInvierteListo.vue'
import DialogInvierte from '@/components/Dashboard/Solicitantes/DialogInvierte.vue'
import DialogInvierteError from '@/components/Dashboard/Solicitantes/DialogInvierteError.vue'
import ProgressBar from '@/components/Dashboard/Cart/ProgressBar'
import SolicitudDetalle from '@/components/Dashboard/Solicitantes/SolicitudDetalle/SolicitudDetalle'
import CirculoGradRsg from '@/components/Dashboard/Solicitantes/CirculoGradRsg'
export default {   
    data(){
        return {            
            dlgDetalle:false,
            dlgInverte:false,
            dlgListo:false
        }
    },
    methods:{
        onInvertido(){
            this.dlgDetalle=false;
        },
        onInvertido(){
            this.dlgInverte=false
            this.dlgListo=true
            this.dlgDetalle=false
        }
        
    },
    components:{
        CirculoGradRsg,
        SolicitudDetalle,
        ProgressBar,
        DialogInvierteListo,
        DialogInvierte,
        DialogInvierteError
    },
    props:{
        isCanasta:{type:Boolean,required:true,default:false},
        onRemove:Function,
        solicitud:{type:Object,required:true}
    },
    computed:{
        getEfectivo(){
            return this.$store.getters.getEfectivo
        }        
    }
}
</script>


<style scoped >

.detailBtn .v-btn__content {
    color:rgb(87,70,123) !important;
}

.detailBtn {     
    padding: 0px 20px !important;    
    width: 100px !important;    
    margin: 0 10px;
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
    
}
.invierteBtn {        
    
    padding: 0px 20px !important;    
    width: 100px !important;   
}

.v-btn {
    height: 18px !important;
    border-radius: 10px !important;
}

</style>