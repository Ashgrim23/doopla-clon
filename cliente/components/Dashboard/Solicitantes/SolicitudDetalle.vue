<template>
    <div class="detalleContaner" >
        <v-row no-gutters >
            <v-col cols="3" class="leftCol">
                <div style="padding:10px 10px;text-align:center;">
                    <v-icon size="70" color="rgb(111, 94, 158)">mdi-currency-usd-circle-outline</v-icon>
                    <p>Alias del solicitante</p>
                    <p style="font-size:25px;"><strong>{{solicitud.solicitante}}</strong></p>
                </div>
                <div style="padding:0px 30px;background-color:rgb(64, 249, 155)">
                    <p ><strong>Generalidades</strong></p>
                    <p ><strong>de la solicitud</strong></p>
                </div>
                <div style="padding-left:30px;">
                    <ul>
                        <li><nuxt-link to="#">Perfil del solicitante</nuxt-link></li>                    
                        <li><nuxt-link to="#">Información crediticia</nuxt-link></li>
                        <li><nuxt-link to="#">Finanzas personales</nuxt-link></li>
                        <li><nuxt-link to="#">Pregunta al solicitante</nuxt-link></li>
                    </ul>
                </div>
                <div style="background-color:rgb(111, 94, 158);text-align:center;padding:10px 0;">
                    <p>Solicita</p>
                    <h3>${{solicitud.monto.toLocaleString()}}</h3>
                    <div style="display:flex;justify-content:center;">
                        <div style="border-top:solid 1px white;padding-top:5px;padding-right:5px;padding-left:24px;">
                            <CirculoGradRsg 
                                medida="50"                                
                                :gradoRiesgo="this.solicitud.gradoRiesgo" />            
                            <p>Interés</p>
                            <p><strong>{{solicitud.tasaInteres}}%</strong></p>
                        </div>
                        <div style="border-top:solid 1px white;border-left:solid 1px white;padding-top:5px;padding-left:5px;">
                            <PayProgreso  medida="50"  :percent="this.percent"/>
                            <p >Fondeado:</p>
                            <p ><strong>24%</strong></p>
                        </div>
                    </div>
                    
                </div>
            </v-col>
            <v-col cols="9">
                <div style="text-align:right;padding-top:5px;padding-right:5px;">                 
                    
                    <v-icon @click="$emit('close')"  color="rgb(64, 249, 155)" size="30">mdi-close</v-icon>
                </div>
                <div>
                    <h2 class="tx-purp1">Generalidades de la solicitud</h2>
                </div>
                <div style="display:flex;justify-content:center;margin-top:25px;">
                    <ul style="color:rgb(111, 94, 158);">
                        <li><p>Plazo del crédito:</p></li>
                        <li><p>Préstamos en Doopla:</p></li>
                        <li><p>Capital fondeado:</p></li>
                        <li><p>Dias para fondear:</p></li>
                        <li><p>Interés ordinario:</p></li>
                        <li><p>Número de pagos:</p></li>
                        <li><p>Score de buró:</p></li>
                        <li><p>Número de solicitud:</p></li>
                    </ul>
                    <ul style="color:rgb(87,70,123);font-weight:900;margin:0 20px;">
                        <li><p>{{this.solicitud.plazo}} meses</p></li>
                        <li><p>3</p></li>
                        <li><p>$#,####</p></li>
                        <li><p>## días</p></li>
                        <li><p>{{this.solicitud.tasaInteres}}%</p></li>
                        <li><p>{{this.solicitud.plazo}}</p></li>
                        <li><p>{{this.solicitud.scoreBuro}}</p></li>
                        <li><p>{{this.solicitud._id.substring(1, 10)}}</p></li>
                    </ul>
                    <div>
                        <p style="color:rgb(111, 94, 158);">Quiénes han prestado:</p>
                    </div>
                </div>
                <div v-if="getEfectivo>250" style="display:flex;align-items:center;justify-content:center;margin-top:10px;">
                    <select class="select" v-model="monto" >
                        <option v-for="(monto,key) in  montosInv" :value="monto" :key="key">${{monto}}</option>
                    </select>
                    <v-btn color="rgb(64, 249, 155)" class="invBtn" @click="onInvertir">invertir</v-btn>
                </div>
                
            </v-col>
        </v-row>
    </div>
</template>

<script>
import CirculoGradRsg from '@/components/Dashboard/Solicitantes/CirculoGradRsg'
import PayProgreso from '@/components/Dashboard/Solicitantes/PayProgreso'
export default {
    components:{
        CirculoGradRsg,
        PayProgreso
    },
    data(){
        return{
            percent:75,
            monto:250
        }
    },
    props:{
        solicitud:{type:Object,required:true}
    },
    computed:{
        getEfectivo(){
            return this.$store.getters.getEfectivo
        },
        montosInv(){
            let efectivo=this.$store.getters.getEfectivo
            let montosInv=[]            
            for (let x=250;x<=efectivo;x+=250) {
                montosInv.push(x)
            }
            return montosInv;
        }
    },
    methods:{
        onInvertir(){
            const inversion={
               solicitud:this.solicitud._id,
               monto:this.monto
            }
            this.$store.dispatch('addInversionToCart',inversion)
            this.$emit("invertido")
        }
    },
}
</script>


<style scoped>
.invBtn {
    border-radius: 5px !important;
    height: 30px !important;    
    margin-left:30px;
}
ul {
    list-style: none;    
}

a{
    line-height: 35px;
    text-decoration: none;
}

.detalleContaner{
    background-color: white;
}

.leftCol{
    color:white;
    background-color: rgb(160, 153, 179);
}

.select{
       all: revert;       
       border-color: rgb(0,0,0,.5);
       background-color: white;
       font-size: 16px;
       border-radius: 5px;
       padding: 3px 5px;
}


</style>