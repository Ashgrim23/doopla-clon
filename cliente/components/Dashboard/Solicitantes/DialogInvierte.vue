<template>
    <v-card>
         <v-card-title style="flex-direction: column;">
            <v-icon size="100">mdi-help-circle-outline</v-icon>
            <h2>Invierte en {{solicitud.solicitante}}</h2>
        </v-card-title>
        <v-card-text style="text-align:center;" >
            <h3>Indica la cantidad que deseas invertir en esta solicitud</h3>
        <select class="select" v-model="monto">
            <option v-for="(monto,key) in  montosInv" :value="monto" :key="key">${{monto}}</option>
        </select>
        </v-card-text>
                 
        <v-card-actions style="justify-content:center;">
            <v-btn color="rgb(64, 249, 155)" class="invBtn" @click="onInvertir">invertir</v-btn>
            <v-btn color="rgb(128,128,128)" class="cancelBtn" @click="$emit('close')">cancelar</v-btn>
        </v-card-actions>
        
    </v-card>
    
</template>

<script>
export default {
    data() {
        return {
            monto:250
        }
    },
    methods:{
        onInvertir(){
            const inversion={
               solicitud:this.solicitud,
               montoInversion:this.monto
            }
            this.$store.dispatch('addInversionToCart',inversion)
            this.$emit("invertido")
        }
    },
    props:{
        solicitud:{type:Object,required:true},
        efectivo:{type:Number,required:true}
    },
    computed:{
        montosInv(){
            let montosInv=[]            
            for (let x=250;x<=this.efectivo;x+=250) {
                montosInv.push(x)
            }
            return montosInv;
        }
    }
}
</script>

<style scoped>
.select{
       all: revert;
       margin-top: 10px;
       border-color: rgb(0,0,0,.5);
       background-color: white;
       font-size: 16px;
       border-radius: 5px;
       padding: 3px 5px;
}


.cancelBtn {
    margin-left: 10px;
}




</style>