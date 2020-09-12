<template>
  <div>
    <v-row no-gutters style="align-content:end;">
      <v-spacer></v-spacer>
      <ul style="list-style: none; width:auto;">
        <li class="itemHola">
          <span style="color:white;">
            Hola,
            <strong v-if="getUsuario">{{getUsuario.nombre}}</strong>
          </span>
          <v-icon @click="togglePopMenu" style="color:rgb(64, 249, 155);">mdi-chevron-down</v-icon>
        </li>
        <ul class="nav-list" :class="{active: popMenu}">
          <li class="nav-item">
            <nuxt-link class="cuentaNum" to="#">
              <span v-if="getUsuario" class="navText">Cliente {{getUsuario._id}}</span>
              <v-icon class="navIcon" dense>mdi-magnify</v-icon>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="opcion" to="#">
              <span class="navText">Ajustes de cuenta</span>
              <v-icon class="navIcon" dense>mdi-cog</v-icon>
            </nuxt-link>
          </li>
          <li class="nav-item" @click="onLogout">
            <nuxt-link class="opcion" to=# >
              <span class="navText">Cerrar sesión</span>
              <v-icon class="navIcon" dense>mdi-exit-to-app</v-icon>
            </nuxt-link>
          </li>
        </ul>
      </ul>
    </v-row>
    <v-row no-gutters style="padding-top:2px;">
      <v-spacer></v-spacer>
      <ul class="navMenu">
        <li class="navMenu-item">
          <nuxt-link to="/resumen-cuenta-inversionista">
            <span>RESUMEN</span>
          </nuxt-link>
        </li>
        <li class="navMenu-item">
          <span>MIS INVERSIONES</span>
        </li>
        <li class="navMenu-item">
          <span>MOVIMIENTOS</span>
        </li>
        <li class="navMenu-item">
          <nuxt-link to="/solicitantes-cuenta-inversionista">
            <span>INVIERTE AHORA</span>
          </nuxt-link>
        </li>
        <li class="navMenu-item">
          <span>TRANSFIERE FONDOS</span>
        </li>
        <li class="navMenu-item">
          <span>SOLICITAR PRÉSTAMO</span>
        </li>
        <li class="navMenu-cart">
          <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/ico-basket.png">
        </li>
      </ul>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popMenu: false
    };
  },
  methods: {
    onLogout(){         
        console.log("click")
         this.$store.dispatch("deslogeaUsuario")
         this.$router.push("/")
    },
    togglePopMenu(e) {
      e.stopPropagation();
      this.popMenu = !this.popMenu;
      if (this.popMenu) {
        window.addEventListener("click", () => {
          this.popMenu = false;
        });
      } else {
        window.removeEventListener("click", () => {
          this.popMenu = false;
        });
      }
    }
  },
  computed: {
    getUsuario() {
      return this.$store.getters.getUsuario;
    }
  }
};
</script>

<style scoped>

 .navMenu-item a{
  text-decoration: none;  
}

.navMenu-item a:hover{
  color:rgb(64, 249, 155);
}

.navMenu {
  display: flex;
  list-style: none;
  align-items: center;
}

.navMenu-item {
  color: white;
  border-right: solid 1px white;
  padding: 0 15px;

  font-size: 14px;
}

.navMenu-cart {
  padding-right: 60px;
  padding-left: 15px;
}

.itemHola {
  width: 401px;
  padding-left: 40px;
  padding-top: 8px;
  padding-right: 25px;
  border-bottom-left-radius: 100px;
  background-image: linear-gradient(
    to right,
    rgb(98, 74, 154) 0%,
    rgb(220, 53, 88) 100%
  );
}

.nav-list {
  display: none;
  position: absolute;
  list-style: none;
  z-index:1000;
  background-color: rgba(232, 232, 232, 0.8);
  padding: 0;
  margin: 0;
  font-size: 14px;
  padding: 0px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px 0px;
}

.active {
  display: block !important;
  transition: all 500ms ease;
}

.nav-item {
  font-weight: 700;

  text-align: center;
}

.navText {
  padding-right: 10px;
}

.navIcon {
  float: right;
  padding-right: 10px;
}

.cuentaNum .v-icon {
  color: white !important;
}

.nav-item:hover > .cuentaNum > .v-icon {
  color: rgb(64, 249, 155) !important;
}

.nav-item:hover > .opcion > .v-icon {
  color: rgb(64, 249, 155) !important;
}

.nav-item a {
  text-decoration: none;
}

.nav-item .cuentaNum {
  background-color: rgb(107, 91, 153);
  color: white;
  padding-left: 10px;
  padding-top: 5px;
  display: block;
  padding-bottom: 2px;
}

.nav-item .opcion {
  color: rgb(107, 91, 153);
  padding-left: 20px;
  padding-top: 5px;
  display: block;
  padding-bottom: 2px;
}

.nav-item .opcion:hover {
  color: white;
  background-color: rgb(107, 91, 153);
}

.nav-item .opcion:hover {
  color: white;
  background-color: rgb(107, 91, 153);
}


@media (max-width: 1120px) {
  .navMenu-item {
    padding: 0 10px;
  }
    
}

@media (max-width: 1200px) {
  .navMenu-cart {
    padding-right: 20px;
    padding-left: 15px;
  }
}

</style>