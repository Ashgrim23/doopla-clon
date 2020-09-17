<template>
    <v-card>
        <v-card-title style="flex-direction: column;">
            <v-icon size="100" style="margin-bottom:10px;" >mdi-check-circle-outline</v-icon>
            <h2>Listo</h2>
        </v-card-title>
        <v-card-text style="text-align:center">
            <h3>Para confirmar tu inversión, ve a tu canasta de inversiones que se ubica en la esquina superior derecha</h3>
              <img src="https://doopla-clone.s3.us-east-2.amazonaws.com/ico-basket.png">
        </v-card-text>
        <v-card-actions style="justify-content:center;">
            <v-btn color="rgb(64, 249, 155)" class="invBtn" @click="$emit('close')">ok</v-btn>
        </v-card-actions>
    </v-card>
</template>
