<template>
  <v-container>
    <v-row>
      <v-col style="text-align:center;">
        <h2 class="dooplaTituloVioleta">MEDIOS DOOPLA</h2>
      </v-col>
    </v-row>
    <v-row>
      <MediosCarrusel :medios="medios" />
    </v-row>
  </v-container>
</template>    

<script>
import MediosCarrusel from '@/components/Landing/Medios/MediosCarrusel'
export default {
    components:{
      MediosCarrusel
    },
    data(){
      return {
        medios:[
          { logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-1-forbes.png",
            desc:"¿Buscas un crédito? Doopla quiere acercarte a inversionistas.",            
            link:"https://www.forbes.com.mx/30-promesas-2019-buscas-un-credito-doopla-quiere-acercarte-a-inversionistas/" 
          },
          { logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-2-reforma.png",
            desc:"Cumpliendo cuatro años de operar y ha aprobado más de 70 millones de pesos en créditos.",            
            link:"https://drive.google.com/open?id=1h5nj41iIUPeoyY_JVkkLH2skcCjWpc4i" 
          },
          { logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-3-excelsior.png",
            desc:"Este año esperan colocar 81 M de pesos en crédito, es la cifra acumulada de cuatro años que han operado.",            
            link:"https://www.excelsior.com.mx/periodico/flip-dinero/07-02-2019/portada.pdf" 
          },
          { logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-4-imagenradio.png",
            desc:"Doopla, plataforma tecnológica que busca revolucionar los créditos en México.",            
            link:"https://www.imagenradio.com.mx/rodrigo-pacheco/doopla-plataforma-tecnologica-que-busca-revolucionar-los-creditos-en-mexico" 
          },
          { logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-5-imagentelevision.png",
            desc:"La protección al cliente debe ser fundamental en cualquier regulación para las fintech.",            
            link:"https://www.eleconomista.com.mx/sectorfinanciero/Proteccion-al-cliente-prioridad-de-regulacion-fintech-BID-20170618-0045.html" 
          },
          { logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-6-entreprenur.png",
            desc:"El emprendedor que te da créditos más baratos que los bancos.",            
            link:"https://www.entrepreneur.com/article/313840" 
          },
          {
            logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-7-economista.png",
            desc:"Las tasas bajas en fintech significan ahorro: Doopla",            
            link:"https://www.eleconomista.com.mx/sectorfinanciero/Las-tasas-bajas-en-fintech-significan-ahorro-Doopla-20180606-0133.html" 
          },
          {
            logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-8-excelsiortv.png",
            desc:'“Miércoles de Emprededor”. Juan Carlos Flores, Socio Fundador y Director de Doopla.',            
            link:"https://www.youtube.com/watch?v=KdEjNxGCNnQ" 
          },
          {
            logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-9-elempresario.png",
            desc:'Gracias a que no hay intermediarios podemos mejorar las actuales condiciones de crédito e inversión',            
            link:"http://elempresario.mx/emprendedores/startup-que-rompe-tasas-interes" 
          },
          {
            logo:"https://doopla-clone.s3.us-east-2.amazonaws.com/carrucel-10-universal.png",
            desc:"Invierte o pide dinero con DOOPLA.",            
            link:"https://www.eluniversal.com.mx/techbit/invierte-o-pide-dinero-con-doopla" 
          }
          ]
      }
    }
    
}
</script>

