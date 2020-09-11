<template>
    <div class="sideNavContainer">
        <div
            v-if="show"
            class="sidenav-backdrop"
            @click="$emit('close')"></div>
        <transition name="slide-side">
              <div v-if="show" class="sidenav">
                <ul class="navList"  @click="$emit('close')">
                    <li>
                        <span  class="itemSaludo">Hola,<strong v-if="getUsuario">{{getUsuario.nombre}}</strong>
                            <v-icon style="color:white;float:right">mdi-cog</v-icon>
                            
                        </span>                      
                    </li>
                    <br>
                    <li class="itemNorm"><nuxt-link to="/resumen-cuenta-inversionista" >RESUMEN</nuxt-link></li>
                    <li class="itemNorm"><nuxt-link to="#" >MIS INVERSIONES</nuxt-link></li>
                    <li class="itemNorm"><nuxt-link to="#" >MOVIMIENTOS</nuxt-link></li>
                    <li class="itemNorm"><nuxt-link to="/solicitantes-cuenta-inversionista" >INVIERTE AHORA</nuxt-link></li>
                    <li class="itemNorm"><nuxt-link to="#" >TRANSFIERE FONDOS</nuxt-link></li>
                    <li class="itemNorm"><nuxt-link to="#"  >SOLICITAR PRESTSAMO</nuxt-link></li>                
                    <v-separator></v-separator>
                    <li class="itemNorm">
                        <nuxt-link to="#" @click.native="onLogout" >CERRAR SESION
                            <v-icon style="color:black;float:right;" >mdi-exit-to-app</v-icon>
                        </nuxt-link>
                        
                    </li>                
                </ul>
            </div>
        </transition>
        
    </div>
</template>

<script>
export default {    
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getUsuario() {
      return this.$store.getters.getUsuario;
    }   
  },
  methods:{
        onLogout(){
            this.$emit("close")
            this.$store.dispatch("deslogeaUsuario")
            this.$router.push("/")
        }
    } 
}
</script>

<style scoped>
.itemSaludo{
    font-size: 24px;
    display: block;
    padding: 20px;
    color:white;
    background-color: rgb(87, 70, 123);
}

.itemNorm {    
    padding: 10px 20px;    
    display: block;
}

.itemNorm a {
    text-decoration: none;
    color: black;
}

.itemNorm a:hover,
.itemNorm a:active {
    color:  rgb(87, 70, 123);
    

}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  text-align: left;
  top: 0;
  left: 0;
  box-sizing: border-box;
  
}

.sidenav-backdrop{
     width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
}

.sideNavContainer{
      height: 100%;
  width: 100%;
}
    .navList{
        height: 100%;
        list-style: none;
    }

</style>


