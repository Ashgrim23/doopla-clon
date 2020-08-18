<template>
  <v-container fluid>
    <v-img
      class="floatWhats"
      src="https://doopla-clone.s3.us-east-2.amazonaws.com/buttonwhats.png"/>

    <v-row no-gutters class="header">
      <v-col>
        <nuxt-link to="/">
          <v-img class="logo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo@2x.png"/>
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col style="text-align:center">
        <p class="dooplaTituloVioleta" style="margin-bottom:20px;">CREA TU CUENTA</p>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-row style="justify-content:center;padding:0 40px;">
          <v-col cols="12" md="4">
            <v-form class="regForm">
               <input
                class="formInput"
                type="email"
                name="email"
                v-model="data.nombre"
                placeholder="Nombre"
                required
              >
              <input
                class="formInput"
                type="email"
                name="email"
                v-model="data.email"
                placeholder="Correo electrónico"
                required
              >
              <input
                class="formInput"
                v-model="data.password"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
              >
              <input
                class="formInput"                
                type="password"
                v-model="data.password_conf"
                name="password_conf"
                placeholder="Confirmar contraseña"
                required
              >

              <v-checkbox value="false" type="checkbox" name="legal" id="checkbox1">
                <template v-slot:label>
                  <div>
                    <p class="tx-purp1" style="font-size:12px;text-align:justify">
                      Acepto
                      <a class="tx-purp1" href="#">Térmnos, Condiciones</a> y
                      <a class="tx-purp1" href="#">Políticas de Privacidad</a>
                    </p>
                  </div>
                </template>
              </v-checkbox>
            </v-form>
          </v-col>
          <v-col cols="12" md="3" style="display:flex;justify-content:center;align-items:center;">
            <v-btn @click="onSubmit" class="redBtn" style="width:190px;">CONTINUAR</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout:"landingLayout",
  data(){
    return {
      data:{
        nombre:"",
        email:"",
        password:"",
        password_conf:""
      }
      
    }
  },
  methods:{
    async onSubmit(){
      try {
        let respuesta = await this.$axios.$post("http://localhost:3001/api/registro",this.data)
        if (respuesta.exito) {
          let res =await this.$store.dispatch("logeaUsuario",this.data)
        }
        
      } catch (error) {
        console.log(error)
      }

    }
  }
}
</script>


<style>

.emptyInput {
  border:1px solid red;
}

.floatWhats {
  color: rgb(24, 110, 66) !important;
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 53px;
  max-height: 53px;
}

.checkLabel {
  font-size: 12px;
}

.header {
  min-height: 203px;
  background-size: cover;
  padding: 12px 0px;
  background-image: url("https://doopla-clone.s3.us-east-2.amazonaws.com/header-bg@2x.png");
}

.regForm {
  display: flex;
  flex-flow: column;
}

.logo {
  max-width: 242px;
  margin: 0 auto;
}

.formInput:focus {
  border-color: black;
}

.formInput {
  background-color: rgb(240, 238, 243);
  color: rgb(87, 70, 123);
  font-size: 13px;
  margin-bottom: 20px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 7px;
  height: 35px;
}

input::placeholder {
  color: rgb(87, 70, 123);
  font-weight: 900;
}

.container {  
  padding: 0;
}

@media (max-width: 960px) {
  .floatWhats {
    max-width: 25px;
    max-height: 25px;
    right: 20px;
  }
}
</style>
