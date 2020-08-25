<template>
  <v-col style="padding-bottom:0;">
    <v-row>
      <v-col cols="12" sm="6" style="padding:0;">
        <div class="DashCardBgm" style="position:relative">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250" >
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon" v-bind="attrs" v-on="on">mdi-help-circle</v-icon>
            </template>
            <span style="color:rgb(87,70,123);font-weight: 900;">Es la Tasa Interna de Retorno, que mide los flujos netos efectivamente recibidos historicos y de los últimos 12 meses, descontando comisiones y pérdidas por cartera vencida</span>
          </v-tooltip >
          <p class="tx-purp1" style="font-weight:900;">Rendimiento</p>
          <span class="DashPurpBg montosRend">15%</span>
        </div>
      </v-col>
      <v-col cols="12" sm="6" style="padding:0;">
        <div class="DashCardBgm" style="position:relative">
          <v-tooltip top color="rgb(64, 249, 155)" max-width="250" >
            <template v-slot:activator="{ on }">
              <v-icon class="helpIcon" v-bind="attrs" v-on="on">mdi-help-circle</v-icon>
            </template>
            <span style="color:rgb(87,70,123);font-weight: 900;">Es la cantidad que has generado por prestar en la cartera de solicitantes. Incluye intereses ordinarios y moratorios sin IVA</span>
          </v-tooltip >
          <p class="tx-purp1" style="font-weight:900;">Intereses generados</p>
          <span class="DashPurpBg montosRend">$78,321.10</span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="DashCardBgm">
        <p class="tx-purp1" style="text-align:center;font-weight:900;">Valor de Cuenta</p>
        <table>
          <colgroup>
            <col style="width:19px">
            <col style="width:235px">
            <col style="width:130px">
          </colgroup>
          <tbody style="background-color:white;">
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Efectivo:</td>
              <td style="text-align:right;">$999,999,319.64</td>
            </tr>
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Préstamos en proceso de fondeo:</td>
              <td style="text-align:right;">$0.0</td>
            </tr>
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Préstamos activos:</td>
              <td style="text-align:right;">$0.0</td>
            </tr>
          </tbody>
          <tfoot class="DashPurpBgm">
            <tr>
              <td colspan="2" style="text-align:left;">
                <strong>Valor de tu Cuenta:</strong>
              </td>
              <td style="text-align:right;">
                <strong>$85,728.40</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="DashCardBgm">
        <v-row no-gutters style="justify-content:space-between;align-items:flex-end">
          <v-col cols="12" sm="6" style="padding:10px 20px;">
            <p class="tx-purp1" style="font-weight:900;">Invita a tus amigos</p>
            <span class="DashPurpBgm inviteSpan" style="display:block">
              <p>
                <strong>¿Conoces algún amigo que le gustaria invertir?</strong>
              </p>
              <p>Invitalo a Doopla y ganen juntos.</p>
            </span>
          </v-col>
          <v-col cols="12" sm="6" style="padding:10px 20px;">
            <v-row no-gutters class="pricesRow">
              <v-col class="colPrecios">
                <p class="pricesLabel">TÚ GANAS</p>
                <p class="DashPurpBg priceMonto">$250</p>
              </v-col>
              <v-col class="colPrecios">
                <p class="pricesLabel">TUS AMIGOS GANAN</p>
                <p class="DashPurpBg priceMonto">$250</p>
              </v-col>
            </v-row>
            <v-row no-gutters style="justify-content:center;background-color:white;padding:4px 0;">
              <nuxt-link class="inviteBtn" to="#">INVITAR</nuxt-link>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    };
  }
};
</script>


<style scoped>
.inviteBtn {
  background-color: rgb(64, 249, 155);
  color: rgb(52, 78, 90);
  display: inline-block;
  padding: 3px 25px;
  text-decoration-line: none;
  text-align: center;
  font-size: 9px;
  font-weight: 900;
  width: 117px;
  border-radius: 10px;
}


.colPrecios {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
}

.priceMonto {
  font-size: 12px;
  width: 50px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}

table {
  max-width: 384px;
  margin: auto;
  table-layout: fixed;
}

td {
  padding: 0 7px;
}

tbody {
  font-size: 15px;
}



.inviteSpan {
  padding: 7px 20px;
  text-align: center;
  margin-top: 7px;
  font-size: 12px;
}

.pricesRow {
  background-image: linear-gradient(
    to right,
    rgb(98, 74, 154) 0%,
    rgb(220, 53, 88) 100%
  );
}

.pricesLabel {
  color: white;
  font-weight: 900;
  font-size: 10px;
}
</style>
