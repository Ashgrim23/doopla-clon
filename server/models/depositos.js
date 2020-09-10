const mongoose =require('mongoose')
const Schema = mongoose.Schema

const DepositoSchema = new Schema({
    usuario:{type:Schema.Types.ObjectId,ref:"User",required:true},
    fecha:{type:Date,required:true },
    monto:{type:Number,required:true}
})

module.exports=mongoose.model("Deposito",DepositoSchema)