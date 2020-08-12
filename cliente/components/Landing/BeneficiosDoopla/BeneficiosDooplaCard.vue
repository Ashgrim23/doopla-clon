<template>
     <v-col cols="auto"  class="cardCol">
        <h3 class="tx-purp1">{{titulo}}</h3>
        <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/icon-solicitantes.png">
        <ul  v-for="(item,index) in items" :key="index" class="itemsList tx-purp1">
        <li class="listItem">{{item}}      </li>
        </ul>        
        <v-btn class="purpleBtn">{{textoSimulador}}</v-btn>     
        <br>   
        <v-btn class="redBtn">{{textoEjecutar}}</v-btn>
  </v-col>
</template>

<script>
export default {
    props:{
        titulo:{
            type:String,
            required:true
        },
        items:{
            type:Array,
            required:true
        },
        textoSimulador:{
            type:String,
            required:true
        },
        textoEjecutar:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>

.v-btn {
    margin-top: 3%;
    
    width:180px;
}

.itemsList{
    text-align: left !important;
    font-size: 1.2rem;
}

ul {
  list-style: none; 
}

ul li::before {
  content: "\2022"; 
  color: rgb(64,249,155);   
  font-size: 1.5rem;
  font-weight: bold; 
  display: inline-block; 
  width: 1em; 
  margin-left: -1em; 
}

</style>



