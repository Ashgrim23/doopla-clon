<template>
  <v-col style="padding-bottom:0;">
    <v-row>
      <v-col cols="12" sm="6" style="padding:0;">
        <div class="DashCardBgm" style="position:relative;text-align: center;">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250">
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon" v-bind="attrs" v-on="on">mdi-help-circle</v-icon>
            </template>
            <span
              style="color:rgb(87,70,123);font-weight: 900;"
            >Es la cantidad que no se ha prestado o que no se ha comprometido con otros préstamos. Esta cantidad la puedes utilizar para invertirla en más solicitantes o retirarla hacia tu cuenta bancaria</span>
          </v-tooltip>
          <p class="tx-purp1" style="font-weight:900;">Efectivo disponible</p>
          <span class="DashPurpBg montosRend">$128.36</span>
          
          <nuxt-link class="efetivoBtn" to="#">TRANSFERIR FONDOS</nuxt-link>
        </div>
      </v-col>
      <v-col cols="12" sm="6" style="padding:0;">
        <div class="DashCardBgm" style="position:relative">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250">
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon" v-bind="attrs" v-on="on">mdi-help-circle</v-icon>
            </template>
            <span
              style="color:rgb(87,70,123);font-weight: 900;"
            >Es la suma de tu dinero disponible, más el monto en proceso de fondeo más tus préstamos activos</span>
          </v-tooltip>
          <p class="tx-purp1" style="font-weight:900;">Valor de tu cuenta</p>
          <span class="DashPurpBg montosRend">$85,806.53</span>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped>
.efetivoBtn {
  background-color: rgb(64, 249, 155);
  color: rgb(52, 78, 90);
  display: inline-block;
  padding: 3px 25px;
  text-decoration-line: none;
  text-align: center;
  font-size: 9px;
  font-weight: 900;
  width: 150px;  
  border-radius: 10px;
}

</style>
