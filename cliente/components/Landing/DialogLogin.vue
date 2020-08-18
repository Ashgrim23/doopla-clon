<template>
  <v-container fluid >
    <v-row no-gutters style="justify-content:end;padding:10px 25px;">
      <v-icon @click="$emit('close')">mdi-close-thick</v-icon>
    </v-row>
    <v-row no-gutters style="justify-content:center">
      <h1>Ingresar</h1>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <form>
          <v-row>
            <v-col>
              <label for="email">Correo electronico:</label><br>
              <input v-model="data.email" id="email" name="email" type="text">
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label for="password">Contraseña:</label><br>
              <input  v-model="data.password" id="password" name="password" type="password">
            </v-col>
          </v-row>
          <v-row style="align-items:center;justify-content:center;margin-top:25px;">
            <v-btn @click="onLogin"  style="margin-left: auto" >Ingresar</v-btn>            
            <v-icon style="margin-left: auto;" size="45px" >mdi-handshake-outline</v-icon>
          </v-row>
        </form>        
      </v-col>
    </v-row>
    <v-row no-gutters style="margin-top:25px">
      <p>¿Olvidaste tu contraseña? <a href="#">Click aquí</a></p>
    </v-row>
    <v-row no-gutters style="margin-top:15px;padding-bottom:25px;">
      <p>¿Aún no tienes cuenta? <nuxt-link to="/registrate">Click aquí</nuxt-link></p>
    </v-row>    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data:{
        email:"",
        password:""
      }
    }
  },
  methods:{
   
    async onLogin(){      
      try {
        let res = await this.$store.dispatch("logeaUsuario",this.data)
        if (res.exito) {
          this.$emit('close');
          this.$router.push('/resumen-cuenta-inversionista')
        }

      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style scoped>

.v-btn{
  background-color: rgba(255,255,255,0.1) !important;
}
.row{
  padding: 0px 25px;
}

input {
  border-radius: 4px;
  padding: 6px 12px;
  color: black;
  margin-top: 5px;
  width: 100%;
  background-color: white;
}

.v-icon {
  color: white;
}

.container {
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
}

h1 {
  font-size: 4rem;
}

</style>
