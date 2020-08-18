<template>
  <v-container fluid class="hd-doop">
    <v-container class="hdContainer">
      <v-row no-gutters>
        <v-col md="4" cols="12" class="logoCol">
          <nuxt-link to="/">
            <img class="img-logo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo.png">
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
            <LeyendaForbes/>
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
              <v-dialog max-width="500px" :fullscreen="$vuetify.breakpoint.xsOnly" v-model="dialogLogin"  transition="slide-y-transition">
                <template v-slot:activator="{on,attrs}">
                  <v-btn v-bind="attrs" v-on="on" class="formBtn">INICIA SESIÓN</v-btn>
                </template>
                <DialogLogin @close="dialogLogin=false"/>
              </v-dialog>
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
import DialogCard from "@/components/Landing/DialogCard";
import DialogLogin from "@/components/Landing/DialogLogin";
import LeyendaForbes from "@/components/Landing/LeyendaForbes"
export default {
  components: {
    SideNavToggle,
    NavMenu,
    DialogLogin,
    DialogCard,
    NavMenuMobile,
    LeyendaForbes
  },
  data() {
    return {      
      displayNavMenuMobile: false,
      dialogLogin:false
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