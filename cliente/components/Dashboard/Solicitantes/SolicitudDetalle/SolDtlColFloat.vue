<template>
        <div class="sideNavContainer">
            <div
                v-if="show"
                class="sidenav-backdrop"
                @click="$emit('close')"></div>
            <transition name="slide-side">
                <div v-if="show" class="sidenav" @click="$emit('close')">
                    <SolDtlColLateral  :solicitud="this.solicitud" />
                </div>
            </transition>
        </div>        
</template>

<script>
import SolDtlColLateral from '@/components/Dashboard/Solicitantes/SolicitudDetalle/SolDtlColLateral'
export default {
    props:{
        show: {type: Boolean,default: false},
        solicitud:{type:Object,required:true}        
    },
    components:{
        SolDtlColLateral
    }
}
</script>

<style scoped>


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
</style>
