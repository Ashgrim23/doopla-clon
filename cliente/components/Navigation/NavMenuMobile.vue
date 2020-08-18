<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>

    <v-row>
      <transition name="slide-side">
        <div v-if="show" class="zindex">
          <ul class="nav-list" @click="$emit('close')">
            <li class="nav-item">
              <nuxt-link to="/">INICIO</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#sec-2">CONOCE DOOPLA</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#sec-4">CONOCE PRÉSTAMOS</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#sec-5">MEDIOS</nuxt-link>
            </li>
            <li class="nav-item">
              <v-dialog
                max-width="500px"
                :fullscreen="$vuetify.breakpoint.xsOnly"
                v-model="dialogLogin"
                transition="slide-y-transition"
              >
                <template v-slot:activator="{on,attrs}">
                  <span style="color:white;" v-bind="attrs" v-on="on">INGRESAR</span>
                </template>
                <DialogLogin @close="dialogLogin=false"/>
              </v-dialog>
            </li>
            <li class="nav-item">
              <nuxt-link to="/registrate">REGISTRO</nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </v-row>
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
  data(){
    return {
      dialogLogin:false
    }
  }
};
</script>

<style scoped>
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  font-size: 14px;
}

.nav-item {
  margin: 10px 0px;
  font-weight: 700;
  text-align: center;
}

.nav-item a {
  text-decoration: none;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.zindex {
  z-index: 10000;
  box-sizing: border-box;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.25);
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}

@media (min-width: 768px) {
  .sidenav-container {
    display: none;
  }
}
</style>
