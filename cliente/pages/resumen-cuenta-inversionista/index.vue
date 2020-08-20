<template>
    <div>
        <div v-if="getUsuario">
         {{getUsuario.nombre}}
          {{getUsuario._id}}
        </div>
        <v-btn @click="onLogout" >cerrar cesion</v-btn>
    </div>
</template>

<script>
export default {
    methods:{
        onLogout(){
            this.$store.dispatch("deslogeaUsuario")
            this.$router.push("/")
        }
    },
    computed:{
        getUsuario(){
            return this.$store.getters.getUsuario
        }
    }    
}
</script>

