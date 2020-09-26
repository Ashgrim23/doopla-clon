<template>
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
                <p ><strong>{{parseFloat(this.percent).toFixed(2)}}%</strong></p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        solicitud:{type:Object,required:true},
        percent:{type:Number,required:true}
    }
    
}
</script>

