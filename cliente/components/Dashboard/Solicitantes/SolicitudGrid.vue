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
                                <svg height="36" width="36">
                                <circle cx="18" cy="18" r="18" :fill="riesgoColor" />
                                <text x="50%" y="50%" text-anchor="middle" stroke="white" stroke-width="1.5px" dy=".3em">{{solicitud.gradoRiesgo}}</text>
                                </svg>                    
                                <p class="solTxtSize">Interés</p>
                                <p class="solTxtSize">{{solicitud.tasaInteres}}%</p>
                            </v-col>
                            <v-col cols="6" style="border-left:solid 1px white;padding:0px 2px;">
                                
                                <svg height="20" width="20" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="10" fill="white" />    
                                    <circle class="pay" cx="10" cy="10" r="5" fill="transparent"
                                            stroke="rgb(64, 249, 155)"         
                                            stroke-width="10"               
                                            transform="rotate(-90) translate(-20)"                          
                                            :stroke-dasharray="circunferencia"/>      
                                </svg> 
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
                        <nuxt-link class="greenBtn" style="flex-grow:0; padding: 3px 5px;margin-top:5px;" to="#">ver detalle</nuxt-link>
                        
                         <v-dialog max-width="500px"  v-model="dlgInverte"  transition="slide-y-transition">
                            <template v-slot:activator="{on,attrs}">                        
                                <v-btn class="purpleBtn invierteBtn"    v-bind="attrs" v-on="on">invertir</v-btn>
                            </template>                            
                            <DialogInvierte v-if="getEfectivo>=250" :solicitud="solicitud" :efectivo="getEfectivo"  @close="dlgInverte=false"/>
                            <DialogInvierteError v-else @close="dlgInverte=false"/>
                        </v-dialog>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-col>
</template>

<script>
import DialogInvierte from '@/components/Dashboard/Solicitantes/DialogInvierte.vue'
import DialogInvierteError from '@/components/Dashboard/Solicitantes/DialogInvierteError.vue'
export default {
    componets:{
        DialogInvierte,
        DialogInvierteError
    },
    props:{
        solicitud:{type:Object,required: true}
    },    
    data() {
        return {            
            percent:75,
            dlgInverte:false
        }
    },
    computed:{
        getEfectivo(){
            return this.$store.getters.getEfectivo
        },
        circunferencia(){
            let c= this.percent * 31.4 / 100
            return c+" 31.4"
        },
        riesgoColor(){
            if (this.solicitud.gradoRiesgo=='A1') return 'rgb(0,255,0)';
            if (this.solicitud.gradoRiesgo=='A2') return 'rgb(0,210,0)';
            if (this.solicitud.gradoRiesgo=='A3') return 'rgb(0,180,0)';
            if (this.solicitud.gradoRiesgo=='A4') return 'rgb(0,150,0)';            
            if (this.solicitud.gradoRiesgo=='B1') return 'rgb(141, 216, 55)';            
            if (this.solicitud.gradoRiesgo=='B2') return 'rgb(115, 192, 27)';            
            if (this.solicitud.gradoRiesgo=='B3') return 'rgb(93, 163, 12)';            
            if (this.solicitud.gradoRiesgo=='B4') return 'rgb(71, 124, 10)';            
            if (this.solicitud.gradoRiesgo=='C1') return 'rgb(216, 216, 0)';            
            if (this.solicitud.gradoRiesgo=='C2') return 'rgb(194, 194, 0);';            
            if (this.solicitud.gradoRiesgo=='C3') return 'rgb(155, 155, 0)';            
            if (this.solicitud.gradoRiesgo=='C4') return 'rgb(119, 119, 0)';            
        }
    }
    
}
</script>


<style scoped>
.pay {
    
  animation: circle-chart-fill 1.5s reverse; /* 1 */ 
  transform: rotate(-90deg); /* 2, 3 */
  transform-origin: center;
}

@keyframes circle-chart-fill {
  to { stroke-dasharray: 0 100; }
}

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

svg {
    width: 36px;
    height:36px;
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
