const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SolicitudSchema = new Schema({
    solicitante: {type:String,required:true },
    fecha:{type:Date,required:true},
    plazo: {type:Number,required:true},
    gradoRiesgo:{type:String,required:true},
    tasaInteres:{type:Number,required:true},
    scoreBuro:{type:Number,required:true},
    monto:{type:Number,required:true},        
    inversiones:[{type:Schema.Types.ObjectId,ref:"Inversion"}],
    fondeado:{type:Boolean,required:true,default:false}
},{
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
})

SolicitudSchema.virtual("statsFondeado").get(function(){
    let statsFondeado={
        porcFondeado:0,
        montoFondeado:0
    }
    if (this.inversiones.length>0){
        let sumMonto=0;
        this.inversiones.forEach(inversion => {
            sumMonto+=inversion.montoInversion;
        });
        statsFondeado.montoFondeado=sumMonto;
        statsFondeado.porcFondeado=(sumMonto/this.monto)*100
        return statsFondeado;
    } else {
        return statsFondeado
    }
})

module.exports=mongoose.model('Solicitud',SolicitudSchema)