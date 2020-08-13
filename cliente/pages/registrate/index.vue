<template>
  <v-container fluid>
    <v-row class="header">
      <v-col>
        <v-img class="logo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo@2x.png"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col  style="text-align:center">
        <p class="dooplaTituloVioleta" style="margin-bottom:20px;">CREA TU CUENTA</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1" sm="3" />
      <v-col cols="11" sm="3"  >
        <form class="regForm">
          <input class="formInput" type="email" name="email" placeholder="Correo electrónico" required >
          <input class="formInput" type="password" name="password" placeholder="Contraseña" required >
          <input class="formInput" type="password" name="password_conf" placeholder="Confirmar contraseña" required >
          <input class="formInput" type="checkbox" name="legal" id="checkbox1">
          <label for="checkbox1" class="tx-purp1" style="font-size:12px;">Acepto <a class="tx-purp1" style="font-size:12px;" href="#">Térmnos, Condiciones</a> y <a style="font-size:12px;" class="tx-purp1" href="#">Políticas de Privacidad</a>
          </label>
        </form>
      </v-col>
      <v-col cols="11" sm="3">
        <v-btn class="redBtn" style="width:190px">CONTINUAR</v-btn>
      </v-col>
      <v-col cols="1" sm="3"/>
    </v-row>
  </v-container>
</template>


<style>
.header {
  min-height: 203px;
  background-size: cover;
  background-image: url("https://doopla-clone.s3.us-east-2.amazonaws.com/header-bg@2x.png");
}

.regForm{
    display: flex;
    flex-flow: column;    
}

.logo {
  max-width: 242px;
  margin: 0 auto;
}

.formInput {
    background-color: rgb(240,238,243);
    color:rgb(87,70,123);
    font-size: 13px;
    margin-bottom: 20px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0 7px;
}

</style>
