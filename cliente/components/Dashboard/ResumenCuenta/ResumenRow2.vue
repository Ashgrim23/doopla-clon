<template>
  <v-row>
    <v-col cols="12" sm="6"  style="padding:3px;">
      <div class="DashCardBgm DashCardBgm-table">
        <table cellspacing="0">
          <thead>
            <tr>
              <th colspan="3">
                <p class="tx-purp1" style="font-weight:900;display:block">Valor de Cuenta</p>
              </th>
            </tr>
          </thead>

          <colgroup>
            <col width="3%">
            <col width="67%">
            <col width="30%">
          </colgroup>
          <tbody >
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Efectivo:</td>
              <td style="text-align:right;">${{getEfectivo}}</td>
            </tr>
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Préstamos en proceso de fondeo:</td>
              <td style="text-align:right;">${{getCuenta.enProceso}}</td>
            </tr>
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Préstamos activos:</td>
              <td style="text-align:right;">${{getCuenta.prestamosActivos}}</td>
            </tr>
          </tbody>
          <tfoot class="DashPurpBgm">
            <tr>
              <td colspan="2" style="text-align:left;">
                <strong>Valor de tu Cuenta:</strong>
              </td>
              <td style="text-align:right;">
                <strong>${{getValorCnt}}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </v-col>
    <v-col cols="12" sm="6"  style="padding:3px;">
      <div class="DashCardBgm DashCardBgm-table" style="text-align: center;">
        
        <table cellspacing="0">
            <thead>
            <tr>
              <th colspan="3">
                <p class="tx-purp1" style="text-align:center;font-weight:900;">Efectivo Disponible</p>
              </th>
            </tr>
          </thead>
          <colgroup>
            <col width="3%">
            <col width="67%">
            <col width="30%">
          </colgroup>
          <tbody >
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Depositos:</td>
              <td style="text-align:right;">${{getCuenta.depositos}}</td>
            </tr>
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Pagos acreditados:</td>
              <td style="text-align:right;">${{getCuenta.pagosAcreditados}}</td>
            </tr>
            <tr>
              <td style="text-align:center">+</td>
              <td style="text-align:left;">Recompensas Doopla:</td>
              <td style="text-align:right;">${{getCuenta.recompensasDoopla}}</td>
            </tr>
            <tr>
              <td style="text-align:center">-</td>
              <td style="text-align:left;">Inversiones netas:</td>
              <td style="text-align:right;">${{getCuenta.InversionesNetas}}</td>
            </tr>
            <tr>
              <td style="text-align:center">-</td>
              <td style="text-align:left;">En proceso:</td>
              <td style="text-align:right;">${{getCuenta.enProceso}}</td>
            </tr>
            <tr>
              <td style="text-align:center">-</td>
              <td style="text-align:left;">En tu canasta:</td>
              <td style="text-align:right;">${{getCuenta.enCanasta}}</td>
            </tr>
            <tr>
              <td style="text-align:center">-</td>
              <td style="text-align:left;">Retiros:</td>
              <td style="text-align:right;">${{getCuenta.retiros}}</td>
            </tr>
          </tbody>
          <tfoot class="DashPurpBgm">
            <tr>
              <td colspan="2" style="text-align:left;">
                <strong>Efectivo disponible:</strong>
              </td>
              <td style="text-align:right;">
                <strong>${{getEfectivo}}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
        <nuxt-link class="greenBtn" style="margin-top:5px;" to="#">TRANSFERIR FONDOS</nuxt-link>
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


<style scoped>
table {
  max-width: 384px;  
  table-layout: fixed;
  
}

td {
  padding: 0 7px;
}

th {
    padding: 5px 0;
}

tbody {
  font-size: 15px;
  font-weight: 300;
  background-color:white;
}

.DashCardBgm-table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


@media (max-width: 900px) {
tfoot,tbody {
  font-size: 13px;
  
}

}
</style>