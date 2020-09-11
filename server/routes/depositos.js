var mongoose = require('mongoose');
const router=require('express').Router()
const Deposito=require('../models/depositos')
const verifyToken=require('../middlewares/verify-token')
const moment=require("moment")

router.get('/Totdepositos',verifyToken,async(req,res)=>{
    try {
        
        let depositos=await Deposito.aggregate([
            
            { $match:{usuario: new mongoose.Types.ObjectId(req.decoded._id)}},
            { $group:{  _id:null,
                        total:{
                                $sum:"$monto"
                            }
                    }
            }
        ])        
        
        let totdepo
        depositos ? totdepo=depositos[0].total : totdepo=0;        
        
        res.json({
            exito:true,
            totDepositos:totdepo
        })
    } catch (error) {
        res.status(500).json({
            exito:false,
            mensaje:error.message
        })
    }
})

router.post('/deposito',verifyToken,async(req,res)=>{
    try {
        const depo= new Deposito()
        depo.monto=req.body.monto
        depo.usuario=req.decoded._id
        depo.fecha=moment()
        const saveddepo=await depo.save()
        if (saveddepo) {
            res.json({
                exito:true,
                mensaje:"Deposito realizado con exito"
            })
        }
    } catch (error) {
        res.status(500).json({
            exito:false,
            mensaje:error.message
        })
    }
})


module.exports=router