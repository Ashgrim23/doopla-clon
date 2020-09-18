<template>
    <v-row class="innerCartRow" >
        <v-col cols="auto">
            <p style="color:red;font-size:14px;margin:5px 0;">No tienes inversiones en tu canasta</p>
            <v-btn color="rgb(64, 249, 155)" class="invBtn" style="margin-bottom:5px;" to="/solicitantes-cuenta-inversionista" nuxt >inverite ahora</v-btn>
        </v-col>
    </v-row>
</template>

<style scoped>
.innerCartRow{
    margin-top:5px;
    background-color: rgb(232, 232, 232);
    border-radius: 5px;
    justify-content: center;
    text-align: center;
}</style>
