<template>
  <v-container fluid class="hd-doop">
    <v-container class="hdContainer">
      <v-row no-gutters>
        <v-col md="4" cols="12" class="logoCol">
          <nuxt-link to="/">
            <img class="img-logo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo.png"/>
          </nuxt-link>
          
          <SideNavToggle @toggle="displayNavMenuMobile = !displayNavMenuMobile"/>          
        </v-col>
        <v-col md="8" cols="12">
          <NavMenu/>
          <NavMenuMobile :show="displayNavMenuMobile" @close="displayNavMenuMobile=false"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="8" cols="12">
          <div class="forbes">
            <div class="leyendaForbes">
              <h1>
                Doopla la primera Fintech, en su tipo, en entregar la solicitud de autorización para ser regulada.
                <v-dialog v-model="dialog">
                  <template v-slot:activator="{on,attrs}">
                    <a v-bind="attrs" v-on="on" class="forbSizeColor nota">Ver más...</a>
                  </template>

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
                      <v-btn class="dialogConfirmBtn" text @click="dialog = false">OK</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </h1>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn class="purpleBtn">SOLICITA</v-btn>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn class="redBtn">INVIERTE</v-btn>
        </v-col>
      </v-row>

      <v-row class="rowMargin1"></v-row>
      <v-row class="revRow">
        <v-col cols="12" md="8">
          <div class="legCol">
            <p>Los bancos se preocupan por el dinero.</p>
            <h1 class="remLeg2">Doopla se preocupa por ti</h1>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="regCol">
          <p>REGÍSTRATE</p>
          <form>
            <input class="regEmail" type="text" placeholder="CORREO ELECTRONICO">
            <br>
            <v-btn class="formBtn">ACTIVA TU CUENTA</v-btn>
            <br>
            <v-btn class="formBtn">INICIA SESIÓN</v-btn>
            <br>
            <v-btn class="faqBtn">Preguntas frecuentes</v-btn>
          </form>
        </v-col>
      </v-row>
      <v-row class="rowMargin2"/>
    </v-container>
  </v-container>
</template>

<script>
import SideNavToggle from "@/components/Navigation/SideNavToggle";
import NavMenu from "@/components/Navigation/NavMenu";
import NavMenuMobile from "@/components/Navigation/NavMenuMobile";
export default {
  components: {
    SideNavToggle,
    NavMenu,
    NavMenuMobile
  },
  data() {
    return {
      dialog: false,
      displayNavMenuMobile: false
    };
  }
};
</script>    

<style scoped>
.rowMargin1,
.rowMargin2 {
  height: 100px;
}

.regCol {
  background-color: rgba(255, 255, 255, 0.25);
  text-align: center;
}

.legCol {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.hd-doop {
  background-image: url("https://doopla-clone.s3.us-east-2.amazonaws.com/header.jpg");
  background-size: cover;
  background-position: 50%;
}

.rowLegendMargin {
  margin-top: 165px;
}

.rowLegend {
  justify-content: end;
  padding-right: 10px;
}

p,
h1 {
  color: white;
  font-weight: 900;
  text-decoration: none;
}

p {
  font-size: 1rem;
}

.remLeg2 {
  font-size: 2rem;
  padding-bottom: 5%;
}

.forbes {
  display: flex;
  background-color: rgb(0, 0, 0, 0.6);
  width: 75%;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.regEmail {
  background-color: rgba(255, 255, 255, 0.61);
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 230px;
  margin-bottom: 15px;
  border: 2px solid red;
}

.leyendaForbes {
  margin: 12.194px 0 12.194px 10px;
  color: rgb(255, 255, 255);
  font-size: 9.1px;
  font-weight: 500;
}

.forbSizeColor {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(64, 249, 155);
  font-size: 15px;

  text-decoration: none;
}

.dialogTitle h1 {
  color: rgb(87, 70, 123);
}

.dialogActions,
.dialogTitle {
  justify-content: center;
}

.nota {
  float: right;
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

.faqBtn .v-btn__content {
  color: rgb(156, 0, 139) !important;
  font-size: 9px;
}

.img-logo {
  max-width: 100%;
  height: auto;
}

@media (max-width: 960px) {
  .remLeg2 {
    font-size: 1.6rem;
  }

  .rowMargin1 {
    height: 20px;
  }

  .rowMargin2 {
    height: 50px;
  }

  .forbes {
    width: 100%;
  }

  .img-logo {
    width: 200px;
    height: 65.5px;
  }

  .legCol {
    align-items: center;
    justify-content: center;
  }
  .regCol {
    padding-left: 30px;
    padding-right: 30px;
  }

  .revRow {
    flex-direction: column-reverse;
  }
}

@media (max-width: 768px) {
  .logoCol {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: 349px) {
  .remLeg2 {
    font-size: 1.4rem;
  }
}
</style>