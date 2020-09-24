const router = require('express').Router()
const Recompensa = require('../models/recompensa')
const verifyToken =require('../middlewares/verify-token')
const moment = require('moment')
const mongoose = require('mongoose')

router.post('/recompensa',verifyToken,async(req,res)=>{
    try {
        let newRecompensa = new Recompensa()
        newRecompensa.usuario=req.decoded._id;
        newRecompensa.fecha=moment()
        newRecompensa.monto=req.body.monto
        let resp = await newRecompensa.save()
        if (resp) {
            res.json({
                exito:true,
                mensaje:'Recompensa registrada con exito'
            })
        }

    } catch (error) {
        res.status(500).json({
            exito:false,
            mensaje:error.message
        })
    }
})

router.get('/TotRecompensas',verifyToken,async(req,res)=>{
    try {
        let recompensas=await Recompensa.aggregate([
            
            { $match:{usuario: new mongoose.Types.ObjectId(req.decoded._id)}},
            { $group:{  _id:null,
                        total:{
                                $sum:"$monto"
                            }
                    }
            }
        ])     
        let total=0;
        
        recompensas ? total=recompensas[0].total : total=0;
        
        res.json({
            exito:true,
            totRecompensas:total
        })
        
    } catch (error) {
        
        res.status(500).json({
            exito:false,
            mensaje:error.message
        })
    }
})


module.exports=router