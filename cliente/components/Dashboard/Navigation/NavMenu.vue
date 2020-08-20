<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="1">
                <img class="imgLogo" src="https://doopla-clone.s3.us-east-2.amazonaws.com/logo.png">
            </v-col>
            <v-col cols="11">
                <v-row no-gutters style="align-content:end;" >  
                    <v-spacer></v-spacer> 
                    
                    <ul style="list-style: none; width:auto;" >
                        <li class="itemHola">
                        <span style="color:white;">Hola, <strong>{{getUsuario.nombre}}</strong></span>
                        <v-icon @click="togglePopMenu" style="color:rgb(64, 249, 155);">mdi-chevron-down</v-icon>
                        </li>
                        <ul  class="nav-list" :class="{active: popMenu}" >
                            <li class="nav-item" >                            
                                <nuxt-link class="cuentaNum" to="#">
                                    <span class="navText" >Cliente {{getUsuario._id}}</span>
                                    <v-icon class="navIcon" dense>mdi-magnify</v-icon>
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="opcion"  to="#">
                                    <span class="navText" >Ajustes de cuenta</span>
                                    <v-icon  class="navIcon" dense>mdi-cog</v-icon>
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <div class="opcion"  >
                                    <span class="navText" >Cerrar sesión</span>
                                    <v-icon class="navIcon" dense>mdi-exit-to-app</v-icon>
                                </div>
                            </li>
                        </ul>
                        
                    </ul>  
                    
                    
                </v-row>
                <v-row no-gutters></v-row>                
            </v-col>
        </v-row>
        
    </v-container>
    
</template>

<script>

export default {
    data() {
        return {
            popMenu:false
        }
    },    
    methods:{
        togglePopMenu(e){
            e.stopPropagation()
            this.popMenu=!this.popMenu
            if (this.popMenu){
                window.addEventListener('click',()=>{                    
                    this.popMenu=false; 
                })
            } else {
                 window.removeEventListener('click',()=>{
                    this.popMenu=false;                        
                })
            }
        }        
    },
     computed:{
        getUsuario(){
            return this.$store.getters.getUsuario
        }
    }    
}
</script>


<style scoped>



.itemHola {
    width:401px;
    padding-left: 40px;
    padding-top: 8px;
    padding-right: 25px;
    border-bottom-left-radius:100px; 
    background-image:linear-gradient(to right, rgb(98, 74, 154) 0%, rgb(220, 53, 88) 100%);
}

.nav-list {
    display: none;
    position: absolute;
    list-style: none;
    
    background-color: rgba(232,232,232,0.8);
    padding: 0;
    margin: 0;    
    font-size: 14px;
    padding: 0px;
    box-shadow:rgba(0,0,0,0.5) 0px 3px 5px 0px;
}

.active {
    display: block !important;
    transition: all 500ms ease;
}

.nav-item {   
  font-weight: 700;
  
  text-align: center;
}

.navText{
    padding-right: 10px;    
}

.navIcon {
    float:right;
    padding-right: 10px; 
}

.cuentaNum .v-icon{
    color:white !important;
}

.nav-item:hover > .cuentaNum > .v-icon{
    color:rgb(64,249,155) !important;
}

.nav-item:hover > .opcion > .v-icon{
    color:rgb(64,249,155) !important;
}


.nav-item a {
  text-decoration: none;
}

.nav-item .cuentaNum {
    background-color:rgb(107,91,153) ;
    color: white;
    padding-left: 10px;
    padding-top: 5px;
    display: block;
    padding-bottom: 2px;
    
}

.nav-item .opcion {
     color: rgb(107,91,153) ;
    padding-left: 20px;
    padding-top: 5px;
    display: block;
    padding-bottom: 2px;
}

.nav-item .opcion:hover{
    color: white;
    background-color:rgb(107,91,153) ;
}

.nav-item .opcion:hover{
    color: white;
    background-color:rgb(107,91,153) ;
}

.container{
    background-color: rgb(87,70,123);
    padding-left: 45px;
    padding-bottom: 0px;
    padding-top: 0px;
    padding-right:0px;
}


    .imgLogo{
        width: 185px;      
          
    }
</style>
