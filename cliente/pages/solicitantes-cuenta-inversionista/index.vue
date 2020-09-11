<template>
   <v-main data-app>
       <div class="bar-notice">
           <span style="color:white;"><strong>Disponible para Invertir (${{getEfectivo}})</strong></span>
       </div>
    <v-container >   
        <v-row no-gutters class="titleRow">            
                
                <span class="tx-purp1 dooplaTitle">INVIERTE AHORA</span>
                <div style="position: absolute;right:15px;display:flex;height:100%;">
                    <v-icon size="30" style="margin-left:15px">mdi-view-list</v-icon>
                    <v-icon size="30" style="margin-left:15px">mdi-view-grid-outline</v-icon>                            
                </div>
        </v-row>
        <v-row class="solicitudesRow">
            <v-col>
                asasd
            </v-col>
        </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
    computed:{
        getEfectivo(){
            return this.$store.getters.getEfectivo;
        }
    }
}
</script>


<style scoped>
.titleRow{
    justify-content: center;
    position: relative;
}
.solicitudesRow {
    background-color: rgb(232, 232, 232);
    box-shadow:rgba(0, 0, 0, 0.3) 0px 7px 3px -3px inset, rgba(0, 0, 0, 0.3) 0px -7px 3px -3px inset;
}
</style>