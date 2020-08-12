<template>
  <v-container>
       <v-row>
      <v-col style="text-align:center;">
        <h2 class="dooplaTituloVioleta">BENEFICIOS</h2>
      </v-col>
    </v-row>
    <v-row style="justify-content:space-evenly; text-align:center;">
      <BeneficiosDooplaCard titulo="SOLICITANTES" :items="itemsSolicitantes" textoSimulador="SIMULAR PRÉSTAMO" textoEjecutar="SOLICITA"  />
      <BeneficiosDooplaCard titulo="INVERSIONISTAS" :items="itemsInversionistas" textoSimulador="SIMULAR INVERSIÓN" textoEjecutar="INVIERTE" />
    </v-row>
  </v-container>
</template>


<script>
import BeneficiosDooplaCard from '@/components/Landing/BeneficiosDoopla/BeneficiosDooplaCard'
export default {
  components:{
    BeneficiosDooplaCard  
  },
  data() {
    return {
        itemsSolicitantes: ["Tasas desde el 12%","Pagan bajos intereses","Trámite sin costo","Respuesta rápida"],
        itemsInversionistas:["Rendimientos promedio del 19%","Plazos de 3 a 36 meses",
                            "Portafolio diverso","Pagos mensuales de capital e interés "]
    }
  }
}
</script>
