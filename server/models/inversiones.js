const mongoose = require('mongoose')
const Schema =mongoose.Schema

const InversionSchema =new Schema({
    usuario:{type:Schema.Types.ObjectId,ref:"User",required:true},
    solicitud:{type:Schema.Types.ObjectId,ref:"Solicitud",required:true},
    fecha:{type:Date,required:true},
    monto:{type:Number,required:true}

})

module.exports=mongoose.model('Inversion',InversionSchema)