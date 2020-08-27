<template>
  <v-row>
    <v-col cols="12" sm="6"  style="padding:3px;">
      <div class="DashCardBgm">
        <v-row no-gutters style="justify-content:space-between;align-items:flex-end">
          <v-col cols="12" sm="6" style="padding:10px 20px;">
            <p class="tx-purp1" style="font-weight:900;">Invita a tus amigos</p>
            <span class="DashPurpBgm inviteSpan" style="display:block">
              <p>
                <strong>¿Conoces algún amigo que le gustaria invertir?</strong>
              </p>
              <p>Invitalo a Doopla y ganen juntos.</p>
            </span>
          </v-col>
          <v-col cols="12" sm="6" style="padding:10px 20px;">
            <v-row no-gutters class="pricesRow">
              <v-col class="colPrecios">
                <p class="pricesLabel">TÚ GANAS</p>
                <p class="DashPurpBg priceMonto">$250</p>
              </v-col>
              <v-col class="colPrecios">
                <p class="pricesLabel">TUS AMIGOS GANAN</p>
                <p class="DashPurpBg priceMonto">$250</p>
              </v-col>
            </v-row>
            <v-row no-gutters style="justify-content:center;background-color:white;padding:4px 0;">
              <nuxt-link class="greenBtn" to="#">INVITAR</nuxt-link>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" sm="6" style="padding:3px;">
        <div class="DashCardBgm" style="display:flex;flex-direction: column;text-align: center;justify-content:center;align-items:center;" >
            <p class="tx-purp1">Índice de diversificación</p>
            <div class="diverCard">
                <div class="contBarra">
                  <div class="indiceNada" ></div>
                  <div class="indiceBaja"></div>
                  <div class="indiceMedia"></div>
                  <div class="indiceAlta"></div>
                </div>
                
                <ul class="contBarraLabels">
                  <li><span class="barraLabel tx-purp1">Nada</span></li>
                  <li><span class="barraLabel tx-purp1">Baja</span></li>
                  <li><span class="barraLabel tx-purp1">Media</span></li>
                  <li><span class="barraLabel tx-purp1 barraLabelActivo">Alta</span></li>
                </ul>
                
            </div>
            <nuxt-link class="greenBtn" style="margin-top:5px;" to="#">INVITAR</nuxt-link>
        </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.contBarra {
  border-radius: 10px;
  background-color: white;
  display:flex;
  height: 18px;
  border: solid 2px white;
  text-align: center;
}

.contBarraLabels {
  display: flex;
  width: 294px;
  justify-content: space-around;
  list-style: none;
}

.barraLabel{  
  width: 65px; 
  display: inline-block;
  font-size: 10px;
  border-radius: 10px;
  background-color: rgba(87,70,123,0.05);
  
}

.barraLabelActivo {
  background-color: white;
}

.indiceNada,.indiceBaja,
.indiceMedia,.indiceAlta {
  width: 72.5px;
  height: 14px;
  
  background-clip: border-box;
  box-sizing: border-box;
}

.indiceNada {
  background-color: rgb(255,82,82);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.indiceBaja {
  background-color: rgb(249,176,88);
}
.indiceMedia {
  background-color: rgb(255,239,95);
}
.indiceAlta {
  background-color: rgb(100,255,104);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}



.diverCard {
  background-color: rgba(87,70,123,0.05);
  width: 342px;
  display: flex;
  padding: 7px 0px;
  flex-direction: column;
  text-align: center;
  justify-content:center;align-items:center;
}

.colPrecios {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
}


.inviteSpan {
  padding: 7px 20px;
  text-align: center;
  margin-top: 7px;
  font-size: 12px;
}

.pricesRow {
  background-image: linear-gradient(
    to right,
    rgb(98, 74, 154) 0%,
    rgb(220, 53, 88) 100%
  );
}

.priceMonto {
  font-size: 12px;
  width: 50px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}

.pricesLabel {
  color: white;
  font-weight: 900;
  font-size: 10px;
}
</style>