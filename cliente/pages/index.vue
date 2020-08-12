<template>
  <div data-app>
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
    
  </div>
</template>

<script>
import Header from "@/components/Landing/Header";
import ConoceDoopla from "@/components/Landing/ConoceDoopla/ConoceDoopla";
import BeneficiosDoopla from "@/components/Landing/BeneficiosDoopla/BeneficiosDoopla";
import PrestamosCarrusel from "@/components/Landing/PrestamosCarrusel/PrestamosCarrusel";
import Medios from '@/components/Landing/Medios/Medios';
import Afiliados from '@/components/Landing/Afiliados/Afiliados';
export default {
  components: {
    Header,
    ConoceDoopla,
    BeneficiosDoopla,
    PrestamosCarrusel,
    Medios,
    Afiliados
  }
};
</script>

