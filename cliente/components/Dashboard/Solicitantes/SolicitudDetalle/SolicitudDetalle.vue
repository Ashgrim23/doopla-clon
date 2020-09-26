<template>
    <div class="detalleContaner" >
        <v-row no-gutters >
            <SolDtlColLateral v-if="this.isMounted && this.$vuetify.breakpoint.mdAndUp" :solicitud="this.solicitud" />
            <SolDtlColFloat v-if="this.isMounted && this.$vuetify.breakpoint.smAndDown" :solicitud="this.solicitud" :show="show" @close="show=!show"/>                 
            <v-col cols="12" md="9">              
                 <div class="headerBand" >
                    <button class="navToggle" @click="show=!show" v-if="this.isMounted && this.$vuetify.breakpoint.smAndDown">
                        <span class="icon-bar" style="margin-top:0;"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>                                             
                    <div style="text-align:center;">
                        <h2 style="color:white;font-weight:900;">Alias del solicitante</h2>                    
                        <h2 style="color:white;font-weight:900;">{{this.solicitud.solicitante}}</h2>
                    </div>
                    <div style="text-align:right;padding-top:5px;padding-right:5px;">                                     
                        <v-icon @click="$emit('close')"  color="rgb(64, 249, 155)" size="30">mdi-close</v-icon>
                    </div>
                </div>
                
                <div>
                    <h2 class="tx-purp1">Generalidades de la solicitud</h2>
                </div>
                <div style="display:flex;justify-content:center;margin:25px 0;flex-wrap:wrap">
                    <div style="display:flex;padding-right:25px;margin-bottom:25px;">
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
                        <li><p>${{solicitud.statsFondeado.montoFondeado.toLocaleString()}}</p></li>
                        <li><p>## días</p></li>
                        <li><p>{{this.solicitud.tasaInteres}}%</p></li>
                        <li><p>{{this.solicitud.plazo}}</p></li>
                        <li><p>{{this.solicitud.scoreBuro}}</p></li>
                        <li><p>{{this.solicitud._id.substring(1, 10)}}</p></li>
                    </ul>
                    </div>
                    <div >
                        <p style="color:rgb(111, 94, 158);font-weight:900;margin-bottom:5px;">Quiénes han prestado:</p>
                        <v-data-table                            
                            style="color:rgb(87,70,123);width:250px;"
                            no-data-text="No hay inversiones"
                            :headers="headers"
                            :items="inversiones"
                            hide-default-footer
                            disable-pagination
                            fixed-header
                            mobile-breakpoint="0"
                            dense                               
                            height="150"
                            
                        />
                    </div>
                </div>
                <div v-if="getEfectivo>=250" style="display:flex;align-items:center;justify-content:center;margin-top:10;margin-bottom:20px;">
                    <select class="select" v-model="monto" >
                        <option v-for="(monto,key) in  montosInv" :value="monto" :key="key">${{monto}}</option>
                    </select>
                    <v-btn color="rgb(64, 249, 155)" class="invBtn" @click="onInvertir">invertir</v-btn>
                </div>                
            </v-col>
        </v-row>
        <v-row no-gutters v-if="this.isMounted && this.$vuetify.breakpoint.smAndDown" style="justify-content:center; color:white;">
            <v-col cols="6" style="padding-bottom:25px;margin-top:10px;">
            <SolDtlCharts  :solicitud="this.solicitud" :percent="solicitud.statsFondeado.porcFondeado"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SolDtlCharts from '@/components/Dashboard/Solicitantes/SolicitudDetalle/SolDtlCharts'
import SolDtlColFloat from '@/components/Dashboard/Solicitantes/SolicitudDetalle/SolDtlColFloat'
import SolDtlColLateral from '@/components/Dashboard/Solicitantes/SolicitudDetalle/SolDtlColLateral'
export default {
    components:{        
        SolDtlColLateral,
        SolDtlColFloat,
        SolDtlCharts
    },
    data(){
        return{       
            headers:[
                {text:"",sortable:false,value:"noreg"},
                {text:"Alias",sortable:false,value:"alias",align:'start'},
                {text:"Monto",sortable:false,value:"monto",align:'end'},
            ], 
            inversiones:[],
            show:false,
            isMounted:false,            
            monto:250
        }
    },
    mounted(){
        this.isMounted=true
        this.fetchInversiones()        
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
        async fetchInversiones(){
            this.inversiones=[]
            this.$axios.defaults.headers.common['x-access-token']=this.$store.state.token                   
            let res = await this.$axios.$get(`/api/inversionesSolicitud/${this.solicitud._id}`)            
            res.inversiones.forEach((inv,idx)=>{
                this.inversiones.push({noreg:idx+1,alias:inv.usuario.nombre, monto:`$${inv.montoInversion}`})
            })
        },
        onInvertir(){
            const inversion={
               solicitud:this.solicitud,
               montoInversion:this.monto
            }
            this.$store.dispatch('addInversionToCart',inversion)
            this.$emit("invertido")
        }
    },
}
</script>


<style scoped>
ul {
    list-style: none;    
}

.headerBand {
    padding: 5px;    
    display:flex;
    justify-content:space-between;    
}

.navToggle {
  width:44px;
  height: 38px;
  align-self: center;
  background-color: white;
  border: solid 1px rgb(87,70,123);
  outline-color: rgb(87,70,123);
  margin-top:1px;
  margin-left:1px;
  padding: 9px 10px;
  border-radius: 4px;
}

.icon-bar {
  background-color: rgb(87,70,123);
  outline-color: white;
  display: block;
  height: 2px;
  margin-top: 4px;
  width: 22px;
}

.invBtn {
    border-radius: 5px !important;
    height: 30px !important;    
    margin-left:30px;
}


.detalleContaner{
    background-color: white;
    height: 100%;
}

.select{
       all: revert;       
       border-color: rgb(0,0,0,.5);
       background-color: white;
       font-size: 16px;
       border-radius: 5px;
       padding: 3px 5px;
}

@media only screen and (max-width: 959px){
    .headerBand {
        background-color:rgb(87,70,123);
    }
}

</style>