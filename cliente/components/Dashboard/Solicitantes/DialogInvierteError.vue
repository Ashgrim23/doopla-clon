<template>
    <v-card>
          <v-card-title style="flex-direction: column;">
            <v-icon size="100" color="rgb(255,0,0)">mdi-close-circle-outline</v-icon>
            <h2>Error</h2>
        </v-card-title>
        <v-card-text style="text-align:center">
            <h3>No tienes suficiente saldo para invertir</h3>
        </v-card-text>
        <v-card-actions style="justify-content:center;">
            <v-btn color="rgb(64, 249, 155)" class="invBtn" @click="$emit('close')">ok</v-btn>
        </v-card-actions>
    </v-card>
</template>