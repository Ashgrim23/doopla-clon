<template>
  <v-col cols="12" md="6">
    <v-row>
      <v-col class="DashCardBgm">
        <p class="tx-purp1" style="font-weight:900;">Rendimiento</p>
        <span class="DashPurpBg">15%</span>
      </v-col>
      <v-col class="DashCardBgm">
        <p class="tx-purp1" style="font-weight:900;">Intereses generados</p>
        <span class="DashPurpBg">$78,321.10</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="DashCardBgm">
        <p class="tx-purp1" style="text-align:center;font-weight:900;">Valor de Cuenta</p>
        <table  >         
           <colgroup>
            <col style="width:19px">
            <col style="width:235px">
            <col style="width:130px">
           </colgroup>
          <tbody style="background-color:white;">
            <tr>
              <td style="text-align:center" >+</td>
              <td style="text-align:left;" >Efectivo:</td>
              <td style="text-align:right;" >$999,999,319.64</td>
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
          <tfoot class="DashPurpBgm" >
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
        <v-row>
          <v-col>
            <p class="tx-purp1" style="font-weight:900;">Invita a tus amigos</p>
            <span class="DashPurpBgm inviteSpan" style="display:block" >
              <p>
                <strong>¿Conoces algún amigo que le gustaria invertir?</strong>
              </p>
              <p>Invitalo a Doopla y ganen juntos.</p>
            </span>
          </v-col>
          <v-col>
            <v-row class="pricesRow">
              <v-col style="text-align:center">
                <p>TÚ GANAS</p>
                <span>$250</span>
              </v-col>
              <v-col style="text-align:center">
                <p>TUS AMIGOS GANAN</p>
                <span>$250</span>
              </v-col>
            </v-row>
            <v-row style="justify-content:center;background-color:white;">
              <span>INVITAR</span>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped>
table {
  
  width: 384px;
  margin: auto;
  table-layout: fixed;

}

td {
  padding: 0 7px;
}

tbody{
  font-size: 15px;
}

.DashPurpBgm{
  background-color:  rgb(87,70,123);
  color: white;
  
  font-size:15px;
}

.inviteSpan{
  padding: 7px 20px;
  text-align: center;
  font-size:12px;
}

.pricesRow{
  background-image:linear-gradient(to right, rgb(98, 74, 154) 0%, rgb(220, 53, 88) 100%)
  
}

</style>
