<template>
  <v-container>
    <v-row>
      <v-col style="text-align:center;">
        <h2 class="dooplaTituloVioleta">PRÉSTAMOS FONDEADOS</h2>
      </v-col>
    </v-row>
    <v-row>
      <Carrusel :datos="datos"/>
    </v-row>
  </v-container>
</template>    

<script>
import Carrusel from "@/components/Landing/PrestamosCarrusel/Carrusel";
export default {
  components: {
    Carrusel
  },
  data() {
    return {
      datos: [
        {titulo: "Consolidar deudas",monto: "$135,000",usuario:"RPM",ciudad: "CDMX"},
        {titulo: "Otros",monto: "$100,000",usuario: "EDU1",ciudad: "Querétaro"},
        {titulo: "Consolidar deudas",monto: "$156,000",usuario: "LMP",ciudad: "CDMX"},
        {titulo: "Otros",monto: "$156,000",usuario: "RSM",ciudad: "CDMX"},
      ]
    };
  }
};
</script>
