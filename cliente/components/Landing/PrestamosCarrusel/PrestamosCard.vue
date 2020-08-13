<template>
  <v-container class="cardContent">
    <v-row>
      <v-col>
        <p class="tx-purp1">{{prestamo.titulo}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="txt-monto">{{prestamo.monto}}</p>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="6" style="text-align:right" >            
            <img class="cardIcon" src="https://doopla-clone.s3.us-east-2.amazonaws.com/icon-cons.png"/>
        </v-col>
        <v-col cols="6">
            <v-row no-gutters>
                <v-col cols="12"><p class="tx-purp1" style="text-align:left;">{{prestamo.usuario}}</p></v-col>
                <v-col cols="12"><p class="tx-purp1" style="text-align:left;">{{prestamo.ciudad}}</p></v-col>
            </v-row>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
      prestamo:{
          type:Object,
          required:true
      }
  }
};
</script>

<style scoped>
.cardContent{
    background-color: white;
    height: 100%;
    box-shadow:rgb(0, 0, 0) 0px 7px 31px -21px inset; 

}

.txt-monto {
    color: rgb(64, 249, 155);
    text-align: center;
    font-size: 50px;
}

.cardIcon{
    width: 70px;
    margin-left: auto;
}
</style>
