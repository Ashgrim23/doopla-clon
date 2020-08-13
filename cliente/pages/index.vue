<template>
  <v-main data-app class="mainCont">
    <v-btn class="floatBtn" fixed bottom right>
      <v-icon>mdi-help-circle</v-icon>Ayuda
    </v-btn>
    <header>
      <Header/>
    </header>
    <section id="sec-2">
      <ConoceDoopla/>
    </section>
    <section id="sec-3">
      <BeneficiosDoopla/>
    </section>
    <section id="sec-4">
      <PrestamosCarrusel/>
    </section>
    <section id="sec-5">
      <Medios/>
    </section>
    <section id="sec-5">
      <Afiliados/>
    </section>
    <section
      style="margin-top:24px;margin-bottom:30px; display:flex;justify-content:center;padding: 0 10px;"
      id="sec-6"
    >
      <div class="forbesSection">
        <LeyendaForbes/>
      </div>
    </section>
    <footer>
      <Footer/>
    </footer>
  </v-main>
</template>

<script>
import Header from "@/components/Landing/Header";
import ConoceDoopla from "@/components/Landing/ConoceDoopla/ConoceDoopla";
import BeneficiosDoopla from "@/components/Landing/BeneficiosDoopla/BeneficiosDoopla";
import PrestamosCarrusel from "@/components/Landing/PrestamosCarrusel/PrestamosCarrusel";
import Medios from "@/components/Landing/Medios/Medios";
import Afiliados from "@/components/Landing/Afiliados/Afiliados";
import LeyendaForbes from "@/components/Landing/LeyendaForbes";
import Footer from "@/components/Landing/Footer/Footer";
export default {
  components: {
    Header,
    ConoceDoopla,
    BeneficiosDoopla,
    PrestamosCarrusel,
    Medios,
    Footer,
    LeyendaForbes,
    Afiliados
  }
};
</script>

<style>
.mainCont {
  margin: 0;
  padding: 0;
  width: 100%;
}

.forbesSection {
  background-color: rgb(0, 0, 0, 0.6);
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;

  max-width: 756px;
}

.floatBtn .v-btn__content{
  color: rgb(24,110,66) !important;
}

.floatBtn {
  background-color:rgb(64, 249, 155) !important;
  border-radius: 13986px;
  
}

</style>
