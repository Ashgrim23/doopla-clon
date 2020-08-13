<template>
  <v-card>
    <v-card-title class="dialogTitle">
      <h1>¡Juntos lo hemos logrado!</h1>
    </v-card-title>

    <v-card-text>
      En Doopla.mx estamos muy contentos de informarte que somos la primera Fintech, en nuestro tipo, en haber entregado a la Comisión Nacional Bancaria y de Valores (CNBV) la solicitud de autorización formal para operar como Institución de Tecnología Financiera (ITF).
      <br>
      <br>Lo anterior es el fruto de un arduo trabajo en equipo, que comenzó a finales del año pasado, en donde contamos con la asesoría de especialistas corporativos y legales con amplia experiencia en el sector financiero, avanzamos en entregar la versión preliminar a finales de junio (mucho antes del plazo establecido por la autoridad) y en agosto recibimos comentarios de la CNBV, a partir de ese momento nos avocamos en trabajar en ellos (para entregar una solicitud sólida y robusta apegada a lo que marca la Ley) y nos propusimos, como meta interna, la entrega de la solicitud formal el miércoles 4 de septiembre para ser la primera Fintech, en nuestro tipo, en lograrlo y cumplimos con ello. Ahora lo que resta es esperar la respuesta de las autoridades financieras, que de acuerdo a la Ley tienen 180 días naturales para hacerlo.
      <br>
      <br>Este importante logro lo queremos compartir hoy contigo porque al estar a un paso de ser una empresa regulada nos traerá beneficios para ti, pues nos brinda certeza jurídica, nos institucionaliza en todos los procesos, lo que sin duda alguna se traduce en una mayor confianza para los usuarios como tú.
      <br>
      <br>
      <b style="color:#57467b">
        ¡Nuevamente mil gracias por tu apoyo y confianza!
        <br>Juan Carlos Flores
        <br>Co-fundador y Director General
        <br>Doopla.mx
      </b>
    </v-card-text>

    <v-card-actions class="dialogActions">
      <v-btn class="dialogConfirmBtn" text @click="$emit('close')">OK</v-btn>
    </v-card-actions>
  </v-card>
</template>



<style scoped>
.dialogTitle h1 {
  color: rgb(87, 70, 123);
}

.dialogActions,
.dialogTitle {
  justify-content: center;
}

.dialogConfirmBtn {
  background-color: rgb(64, 248, 155);
  border-color: rgb(64, 248, 155);
  width: 87px;
  border-radius: 3px;
}

.dialogConfirmBtn:hover {
  background-color: rgb(58, 223, 140);
  border-color: rgb(58, 223, 140);
}
</style>
