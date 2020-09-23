<template>
  <v-main data-app>
    <div class="bar-notice">
      <span style="color:white;">
        <strong>Disponible para Invertir (${{getEfectivo}})</strong>
      </span>
    </div>
    <v-container>
      <v-row no-gutters class="titleRow">
        <span class="tx-purp1 dooplaTitle" style="margin-bottom:20px;">INVIERTE AHORA</span>
        <div class="viewsContainer" >
          <v-icon            
            v-if="this.$vuetify.breakpoint.mdAndUp"
            id="listView"
            @click="viewToggle"
            :class="{disabledView:grid}"
            size="30"
            style="margin-left:15px"
          >mdi-view-list</v-icon>
          <v-icon
            id="gridView"
            @click="viewToggle"
            :class="{disabledView:!grid}"
            size="30"
            style="margin-left:15px"
          >mdi-view-grid-outline</v-icon>
        </div>
      </v-row>
      <CartRowHeader v-if="!this.grid"/>
      <v-row class="solicitudesRow">                  
          <template v-if="solicitudes">
              <template v-if="this.grid">
                <SolicitudGrid v-for="(solicitud,key) in solicitudes" :key="key" :solicitud="solicitud" :isCanasta="false"/>                        
              </template>
              <template v-else>                
                <SolicitudList v-for="(solicitud,key) in solicitudes" :key="key" :solicitud="solicitud" :isCanasta="false"/>
              </template> 
                    
          </template>
          <div v-else style="padding:3% 15%">
              <p class="tx-purp1" style="font-size:20px;">
                En estos momentos nuestro equipo de crédito está trabajando en la aprobación de más solicitantes, 
                para que pronto puedas invertir en ellos.
              </p>                  
          </div>        
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import SolicitudGrid from '@/components/Dashboard/Solicitantes/SolicitudGrid'
import CartRowHeader from '@/components/Dashboard/Cart/CartRowHeader'
import SolicitudList from '@/components/Dashboard/Solicitantes/SolicitudList'
export default {
   created() {
        if (typeof window !== 'undefined') {
          window.addEventListener("resize", this.checkSize);
        }
    },
    destroyed() {
        if (typeof window !== 'undefined') {
          window.removeEventListener("resize", this.checkSize);
        }
    },
  async asyncData({$axios}){
    try {
      const response =await $axios.get('api/solicitudes')
      let solicitudes=[]
      if (response.data.exito) solicitudes=response.data.solicitudes
      
      return {
        solicitudes:solicitudes
      };     
    } catch (e) {
      console.log(e)
    }

  },
  components:{
    SolicitudGrid,
    CartRowHeader,
    SolicitudList
  },
  data() {
    return {
      grid: true
    };
  },
  methods: {
    viewToggle(event) {
      event.target.id == "gridView" ? (this.grid = true) : (this.grid = false);
    },
    checkSize(event){
       if (window.innerWidth<960) {
         this.grid=true
       }
    }
  },
  computed: {
    getEfectivo() {
      return this.$store.getters.getEfectivo;
    }
    
  }
};
</script>


<style scoped>
.viewsContainer{
    position: absolute;
    right:15px;
    display:flex;
    height:100%;
}
.disabledView {
  opacity: 0.5;
}

.titleRow {
  justify-content: center;
  position: relative;
}
.solicitudesRow {
  padding: 9px;  
  background-color: rgb(232, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 3px -3px inset,
    rgba(0, 0, 0, 0.3) 0px -7px 3px -3px inset;
}

@media (max-width:500px){
    .viewsContainer{
        display: none;
    }
} 

</style>