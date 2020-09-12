<template>
    <v-col cols="12" sm="6" md="4"  style="padding:6px;"  >
        <div class="solCardGrid">
            <v-row no-gutters>
                <v-col cols="5" class="solCardCol1" >
                    <v-row no-gutters style="flex-direction:column;">
                        <p style="color:rgb(64, 249, 155);font-weight:900;">DDCG</p>
                        <p style="border-bottom:solid 1px white;font-size:12px;">Detalle</p>
                        <p class="solTxtSize">Solicitud de:</p>
                        <p style="font-weight:900;">$68,000</p>
                        <v-row no-gutters class="grafRow">                        
                            <v-col cols="6" style="padding:0px 2px;">
                                <svg height="36" width="36">
                                <circle cx="18" cy="18" r="18" fill="green" />
                                <text x="50%" y="50%" text-anchor="middle" stroke="white" stroke-width="1.5px" dy=".3em">C4</text>
                                </svg>                    
                                <p class="solTxtSize">Interés</p>
                                <p class="solTxtSize">34%</p>
                            </v-col>
                            <v-col cols="6" style="border-left:solid 1px white;padding:0px 2px;">
                                
                                <svg height="20" width="20" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="10" fill="white" />    
                                    <circle cx="10" cy="10" r="5" fill="transparent"
                                            stroke="rgb(64, 249, 155)"         
                                            stroke-width="10"               
                                            transform="rotate(-90) translate(-20)"                          
                                            stroke-dasharray="calc(25 * 31.4 / 100) 31.4"/>      
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
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-calendar-month</v-icon> Plazo: 24 meses</p>
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-cash-multiple</v-icon> Acepta: $68,000</p>
                        <p class="solTxtSize" style="line-height: 20px;"><v-icon color="rgb(87,70,123)" size="20">mdi-chart-pie</v-icon> Monto faltnte: $51,500</p>
                    </div>
                    <div style="text-align:center;height:100%;">                        
                        <nuxt-link class="greenBtn" style="flex-grow:0; padding: 3px 5px;margin-top:5px;" to="#">ver detalle</nuxt-link>
                        <nuxt-link class="purpleBtn" style="flex-grow:0;padding: 3px 5px;margin-top:5px;" to="#">invertir</nuxt-link>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-col>
</template>

<style scoped>
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
