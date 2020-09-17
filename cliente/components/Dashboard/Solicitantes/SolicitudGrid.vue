<template>    
    <v-col cols="12" sm="6" md="4"  style="padding:6px;"  >   
        
        <div class="solCardGrid">
            <v-row no-gutters>
                <v-col cols="5" class="solCardCol1" >
                    <v-row no-gutters style="flex-direction:column;">
                        <p style="color:rgb(64, 249, 155);font-weight:900;">{{solicitud.solicitante}}</p>
                        <p style="border-bottom:solid 1px white;font-size:12px;">Detalle</p>
                        <p class="solTxtSize">Solicitud de:</p>
                        <p style="font-weight:900;">${{solicitud.monto.toLocaleString()}}</p>
                        <v-row no-gutters class="grafRow">                        
                            <v-col cols="6" style="padding:0px 2px;">
                                <CirculoGradRsg    
                                    medida="36"                                     
                                    :gradoRiesgo="solicitud.gradoRiesgo"/>
                                <p class="solTxtSize">Interés</p>
                                <p class="solTxtSize">{{solicitud.tasaInteres}}%</p>
                            </v-col>
                            <v-col cols="6" style="border-left:solid 1px white;padding:0px 2px;">
                                
                                <PayProgreso  medida="36"  :percent="this.percent"/>
                                <p class="solTxtSize">Fondeado:</p>
                                <p class="solTxtSize">24%</p>
                            </v-col>
                            
                        </v-row>
                    </v-row>                
                </v-col>
                <v-col cols="7" class="solCardCol2"  >
                    <div style="background-color:rgb(232, 232, 232);padding:5px;">
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-package-variant-closed</v-icon> Propósito: Otros</p>                    
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-timer-outline</v-icon> Faltan: 38 día(s) para fondearse</p>
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-calendar-month</v-icon> Plazo: {{solicitud.plazo}} meses</p>
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-cash-multiple</v-icon> Acepta: ${{solicitud.monto.toLocaleString()}}</p>
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-chart-pie</v-icon> Monto faltnte: $51,500</p>
                    </div>
                    <div style="text-align:center;height:100%;">                        
                        <v-dialog max-width="800px"  v-model="dlgDetalle"  transition="slide-y-transition">
                            <template v-slot:activator="{on,attrs}">
                                <v-btn class="greenBtn invierteBtn" v-bind="attrs" v-on="on">ver detalle</v-btn>                            
                            </template>
                            <SolicitudDetalle @close="dlgDetalle=false" :solicitud="solicitud" @invertido="onInvertido"/>
                        </v-dialog>
                         <v-dialog max-width="500px"  v-model="dlgInverte"  transition="slide-y-transition">
                            <template v-slot:activator="{on,attrs}">                        
                                <v-btn class="purpleBtn invierteBtn" v-bind="attrs" v-on="on">invertir</v-btn>
                            </template>                            
                            <DialogInvierte v-if="getEfectivo>=250" :solicitud="solicitud" :efectivo="getEfectivo"  @close="dlgInverte=false" @invertido="onInvertido"/>
                            <DialogInvierteError v-if="getEfectivo<250 && dlgInverte==true " @close="dlgInverte=false"/>
                        </v-dialog>
                        <v-dialog max-width="500px"  v-model="dlgListo"  transition="slide-y-transition">
                            <DialogInvierteListo @close="dlgListo=false"/>
                        </v-dialog>
                        
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-col>
</template>

<script>
import SolicitudDetalle from '@/components/Dashboard/Solicitantes/SolicitudDetalle.vue'
import DialogInvierteListo from '@/components/Dashboard/Solicitantes/DialogInvierteListo.vue'
import DialogInvierte from '@/components/Dashboard/Solicitantes/DialogInvierte.vue'
import DialogInvierteError from '@/components/Dashboard/Solicitantes/DialogInvierteError.vue'
import CirculoGradRsg from '@/components/Dashboard/Solicitantes/CirculoGradRsg'
import PayProgreso from '@/components/Dashboard/Solicitantes/PayProgreso'
export default {
    methods:{
        onInvertido(){
            this.dlgInverte=false
            this.dlgListo=true
            this.dlgDetalle=false
        }
    },
    componets:{
        DialogInvierte,
        PayProgreso,
        CirculoGradRsg,
        DialogInvierteError,
        DialogInvierteListo
    },
    props:{
        solicitud:{type:Object,required: true}
    },    
    data() {
        return {            
            percent:75,
            dlgInverte:false,
            dlgDetalle:false,
            dlgListo:false
        }
    },
    computed:{
        getEfectivo(){
            return this.$store.getters.getEfectivo
        }        
    }
    
}
</script>

<style scoped>
.invierteBtn {
    border-radius: 0 !important;
    padding: 0px 0px !important;
    margin-top:5px !important;
    font-size: 9px;
}

.v-btn {
    height: 18px !important;
    border-radius: 10px !important;
}


.solTxtSize {
    font-size: 10px;
}
.grafRow{
    
   margin-top: 3px;
   padding: 5px 3px;   
   border-radius: 3px;
   background-color:rgb(87,70,123);
   height: 100%;
}

.solCardCol2{
    
    flex-direction:column;
    padding:5px;
}

.solCardCol1{
    text-align: center;
    color:white;
    background-color:rgb(111, 94, 158);
    padding:5px;
    border-radius: 3px;
}

.solCardGrid{        
    padding: 4px;    
    background-color: white;
    box-shadow:rgba(0, 0, 0, 0.5) 0px 3px 5px 0px;
}
</style>
