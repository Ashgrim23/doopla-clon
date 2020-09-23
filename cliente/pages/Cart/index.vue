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
                <template v-if="this.$vuetify.breakpoint.smAndDown">
                        <SolicitudGrid :isCanasta="true" :onRemove="removeInversion"  v-for="(inversion,key) in getCart" :key="key" :solicitud="inversion"/>
                        <EmptyCartRow v-if="getEnCanasta==0" />     
                </template>   
                <v-col v-if="this.$vuetify.breakpoint.mdAndUp">
                    <CartRowHeader/>
                    <EmptyCartRow v-if="getEnCanasta==0" />     
                    <SolicitudList  :isCanasta="true" v-for="(inversion,key) in getCart" :key="key" :solicitud="inversion" :onRemove="removeInversion" />
                </v-col>
                
            </v-row>
            <v-row style="justify-content:flex-end;">
                <div style="display:flex;margin-top:10px;margin-right:15px;">                    
                    <p style="font-size:18px;font-weight:900;color:rgb(87,70,123);">Total:&nbsp;</p>
                    <span class="cartTot">${{this.getEnCanasta}}</span>                             
                </div>
            </v-row>
            <v-row dense style="margin-top:20px;" >                
                <v-col  cols="12" md="6" class="subHeader legendBtmCol" >
                    <div>                        
                        <p>Recuerda que una de las razones por las cuales puedes obtener buenos rendimientos 
                        se debe a que el interés que pagan los acreditados se destina a ti inversionista, pues eres tú 
                        quien otorga el préstamo directamente. Doopla no genera ingresos por los intereses sino a través 
                        de las comisiones que cobra a ambos.</p>
                    </div>                                                            
                </v-col>            
                <v-col class="confBtnCol" cols="12" md="6"  >
                    <v-btn id="confBtn" v-if="getEnCanasta>0" class="greenBtn confBtn" >confirmar</v-btn>                            
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    
</template>

<style >
.legendBtmCol {
    order:1
}

.confBtnCol {
    order:2
}

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
    font-size:12px ;
    border-radius: 5px;
    background-color:rgb(232, 232, 232);
    display:flex;
    margin-bottom: 20px;
}

@media only screen and (max-width:960px) {
    .legendBtmCol {
        order:2
    }

    .confBtnCol {
        order:1;
        text-align: center;
        margin-bottom: 20px;
        
    }
}

</style>

<script>
import EmptyCartRow from '@/components/Dashboard/Cart/EmptyCartRow'
import CartRowHeader from '@/components/Dashboard/Cart/CartRowHeader'
import SolicitudGrid from '@/components/Dashboard/Solicitantes/SolicitudGrid'
import SolicitudList from '@/components/Dashboard/Solicitantes/SolicitudList'
export default {
    components:{
        EmptyCartRow,
        CartRowHeader,
        SolicitudList,
        SolicitudGrid
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
    },
    methods: {
        removeInversion(inversion){            
            this.$store.dispatch("removeInversion",inversion)
        }
    }
    
}
</script>
