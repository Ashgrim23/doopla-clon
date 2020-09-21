<template>
    <v-main data-app>
        <div clasS="bar-notice"> 
            <p style="color:white;"><strong>Disponible para Invertir (${{getEfectivo}})</strong>  </p>
        </div>
        <v-container fuild>
            <v-row>
                <v-col>
                    <h2 class="tx-purp1"><strong>CANASTA DE INVERSIONES</strong></h2>
                </v-col>
            </v-row>
            <v-row dense style="justify-content:center;">                
                <v-col cols="auto" class="subHeader" >
                    <div >                        
                        <p>A) Asegúrate de que tu selección sea la correcta.</p>
                        <p>B) Revisa que tus aportaciones sean por la cantidad deseada.</p>
                    </div>                                        
                    <v-icon>mdi-magnify</v-icon>                    
                </v-col>               
            </v-row>
            <v-row class="cartRow" >
                <v-col>
                    <CartRowHeader v-if="this.$vuetify.breakpoint.mdAndUp" />
                    <EmptyCartRow v-if="getEnCanasta==0" />     
                    <v-template v-if="this.$vuetify.breakpoint.mdAndUp">
                        <CartRow  v-for="(inversion,key) in getCart" :key="key" :inversion="inversion" />
                    </v-template>
                    <v-template v-if="this.$vuetify.breakpoint.smAndDown">
                        <CarCard  v-for="(inversion,key) in getCart" :key="key" :inversion="inversion"/>
                    </v-template>                   
                    
                    <v-row style="justify-content:flex-end;margin-top:20px;align-items:flex-end;">
                        <p  style="font-size:18px;font-weight:900;color:rgb(87,70,123);">Total:&nbsp;</p>
                        <span class="cartTot">${{this.getEnCanasta}}</span>                        
                    </v-row>                    
                </v-col>
            </v-row>
            <v-row dense style="margin-top:20px;" >                
                <v-col cols="12" md="6" class="subHeader" order-md1 order="2" >
                    <div>                        
                        <p>Recuerda que una de las razones por las cuales puedes obtener buenos rendimientos 
                        se debe a que el interés que pagan los acreditados se destina a ti inversionista, pues eres tú 
                        quien otorga el préstamo directamente. Doopla no genera ingresos por los intereses sino a través 
                        de las comisiones que cobra a ambos.</p>
                    </div>                                                            
                </v-col>            
                <v-col cols="12" md="6" order-md2 order="1">
                    <v-btn id="confBtn" v-if="getEnCanasta>0" class="greenBtn confBtn" v-bind="attrs" v-on="on">confirmar</v-btn>                            
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    
</template>

<style >

#confBtn .v-btn__content {
    color:rgb(87,70,123) !important;
}

.confBtn {
    border-radius: 10px !important;    
    padding: 0px 15px !important;    
    width: auto !important;
    font-size: 16px !important;
    margin: 0 10px;
}

.cartTot{
    cursor: not-allowed; 
    display: inline-block;
    padding:2px 4px;
    border:solid 1px rgb(184,184,229) ;
    border-radius: 5px;
    width: 116px;
    text-align: right;
    vertical-align: middle;
}

.cartRow {
  padding: 9px;    
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 3px -3px inset,
   rgba(0, 0, 0, 0.3) 0px -7px 3px -3px inset;
}



.subHeader{
    font-size:12px;
    border-radius: 5px;
    background-color:rgb(232, 232, 232);
    display:flex;
    margin-bottom: 20px;
}
</style>

<script>
import EmptyCartRow from '@/components/Dashboard/Cart/EmptyCartRow'
import CartRowHeader from '@/components/Dashboard/Cart/CartRowHeader'
export default {
    components:{
        EmptyCartRow
    },
    computed:{
        getEfectivo(){
            return this.$store.getters.getEfectivo
        },
        getEnCanasta(){
            return this.$store.getters.getEnCanasta
        },
        getCart(){
            return this.$store.getters.getCart
        }
    }
}
</script>
