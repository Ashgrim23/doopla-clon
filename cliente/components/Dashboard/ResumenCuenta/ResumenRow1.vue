<template>
    <v-row style="align-items:stretch;">
        <v-col style="padding:3px;"  cols="12" sm="6" md="3" >
        <div class="DashCardBgm" style="position:relative;">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250" >
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon"  v-on="on">mdi-help-circle</v-icon>
            </template>
            <span style="color:rgb(87,70,123);font-weight: 900;">Es la Tasa Interna de Retorno, que mide los flujos netos efectivamente recibidos historicos y de los últimos 12 meses, descontando comisiones y pérdidas por cartera vencida</span>
          </v-tooltip >
          <p class="tx-purp1" style="font-weight:900;">Rendimiento</p>
          <span class="DashPurpBg montosRend">{{getCuenta.rendimiento}}%</span>
        </div>
      </v-col>
      <v-col style="padding:3px;" cols="12" sm="6" md="3" >        
          <div class="DashCardBgm"  style="position:relative;">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250" >
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon"  v-on="on">mdi-help-circle</v-icon>
            </template>
            <span style="color:rgb(87,70,123);font-weight: 900;">Es la cantidad que has generado por prestar en la cartera de solicitantes. Incluye intereses ordinarios y moratorios sin IVA</span>
          </v-tooltip >
          <p class="tx-purp1" style="font-weight:900;">Intereses generados</p>
          <span class="DashPurpBg montosRend">${{getCuenta.intGenerados}}</span>        
          </div>
      </v-col>
      <v-col style="padding:3px;" cols="12" sm="6" md="3"  >
        <div class="DashCardBgm" style="position:relative;text-align:center;">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250">
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon"  v-on="on">mdi-help-circle</v-icon>
            </template>
            <span
              style="color:rgb(87,70,123);font-weight: 900;"
            >Es la cantidad que no se ha prestado o que no se ha comprometido con otros préstamos. Esta cantidad la puedes utilizar para invertirla en más solicitantes o retirarla hacia tu cuenta bancaria</span>
          </v-tooltip>
          <p class="tx-purp1" style="font-weight:900;">Efectivo disponible</p>
          <span class="DashPurpBg montosRend">${{getEfectivo}}</span>

          <nuxt-link class="greenBtn" to="#">TRANSFERIR FONDOS</nuxt-link>
        </div>
      </v-col>
      <v-col style="padding:3px;"  cols="12" sm="6" md="3"  >
        <div class="DashCardBgm" style="position:relative;">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250">
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon"  v-on="on">mdi-help-circle</v-icon>
            </template>
            <span
              style="color:rgb(87,70,123);font-weight: 900;"
            >Es la suma de tu dinero disponible, más el monto en proceso de fondeo más tus préstamos activos</span>
          </v-tooltip>
          <p class="tx-purp1" style="font-weight:900;">Valor de tu cuenta</p>
          <span class="DashPurpBg montosRend">${{getValorCnt}}</span>
        </div>
      </v-col>
    </v-row>
</template>


<script>

export default {
computed: {
    getCuenta() {
      return this.$store.getters.getCuenta;
    },
    getEfectivo(){
      return this.$store.getters.getEfectivo;
    },
    getValorCnt(){
      return this.$store.getters.getValorCnt;
    }
  }
}
</script>
