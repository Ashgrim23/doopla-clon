const mongoose = required('mongoose')
const Schema = moongose.Schema

const SolicitudSchema = new Schema({
    solicitante: {type:String,required:true },
    fecha:{type:Date,required:true},
    plazo: {type:Number,required:true},
    gradoRiesgo:{type:String,required:true},
    tasaInteres:{type:Number,required:true},
    scoreBuro:{type:Number,required:true},
    monto:{type:Number,required:true},
    inversionistas:[{type:Schema.Types.ObjectId,ref:'Inversion'}]
})


module.exports=mongoose.model('Solicitud',SolicitudSchema)