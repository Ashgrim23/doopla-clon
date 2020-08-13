<template>
  <v-container>
    <v-row class="footRow" >
      <v-col cols="6" sm="auto">
        <p class="pTitle">
            <v-icon >mdi-alert-circle</v-icon>        
            Préstamo justo
        </p>
        <a href="#"><p style="margin-left:9px">Cómo funciona</p></a>
        <a href="#"><p style="margin-left:9px">Qué necesitas</p></a>
        <a href="#"><p style="margin-left:9px">Compáranos</p></a>
        <a href="#"><p style="margin-left:9px">Regístrate</p></a>
        <a href="#"><p style="margin-left:9px">Nuestros consejos</p></a>
      </v-col>
      <v-col cols="6" sm="auto">
           <p class="pTitle">
            <v-icon >mdi-alert-circle</v-icon>        
            Presta tu dinero
        </p>
        <a href="#"><p style="margin-left:9px">Cómo funciona</p></a>
        <a href="#"><p style="margin-left:9px">Qué pedimos</p></a>
        <a href="#"><p style="margin-left:9px">Compáranos</p></a>        
      </v-col>
      <v-col cols="6" sm="auto">
        <p class="pTitle">
            <v-icon >mdi-alert-circle</v-icon>        
            Sobre Doopla
        </p>
        <a href="#"><p style="margin-left:9px">Nuestra historia</p></a>
        <a href="#"><p style="margin-left:9px">Estadísticas Doopla</p></a>        
      </v-col>      
      <v-col cols="6" sm="auto">
           <p class="pTitle">
            <v-icon >mdi-alert-circle</v-icon>        
            Seguridad
        </p>
        <a href="#"><p style="margin-left:9px">Cobranza descuento de<br>nómina</p></a>
        <a href="#"><p style="margin-left:9px">Medidas de cobranza<br>ante morosidades</p></a>
        <a href="#"><p style="margin-left:9px">Nuestros consejos</p></a>
      </v-col>
      <v-col cols="6" sm="auto">
        <p class="pTitle">
            <v-icon >mdi-alert-circle</v-icon>        
            Ayuda
        </p>
        <a href="#"><p style="margin-left:9px">Preguntas frecuentes</p></a>
        <a href="#"><p style="margin-left:9px">¿Qué son los préstamos<br>Persona a Persona?</p></a>        
        <a href="#"><p style="margin-left:9px">Ventajas de los<br>préstamos Persona a<br>Persona</p></a>        
        <a href="#"><p style="margin-left:9px">Aviso de privacidad</p></a>        
        <a href="#"><p style="margin-left:9px">Términos y condiciones</p></a>        
        <a href="#"><p style="margin-left:9px">Contáctanos</p></a>        

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
    .footRow{
        justify-content:space-evenly;
    }
    .v-icon {
        color: rgb(64, 249, 155);        
        font-size: 20px;
    }
    .pTitle,p{
        color: rgb(87,70,123);
        margin-bottom: 10px;
    }

    .pTitle {
        font-size: 16px;
        font-weight: 900;
    }
  
@media (max-width: 600px) {
    .footRow{
        justify-content:flex-start;
    }
}

</style>