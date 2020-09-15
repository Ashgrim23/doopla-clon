const router = require('express').Router()
const verifyToken =require('../middlewares/verify-token')
const Sols = require('../models/solicitudes')
const moment=require("moment")

// ruta solo usada para crear solicitudes dummy
// router.post('/solicitud',async(req,res)=>{
//     try {
//         const solicitud= new Sols()
//         console.log(req.body)
//         solicitud.solicitante=req.body.solicitante
//         solicitud.fecha=moment()
//         solicitud.plazo=req.body.plazo
//         solicitud.gradoRiesgo=req.body.gradoRiesgo
//         solicitud.tasaInteres=req.body.tasaInteres
//         solicitud.scoreBuro=req.body.scoreBuro
//         solicitud.monto=req.body.monto
//         solicitud.inversionistas=[]
//         const savedSol= await solicitud.save();
//         if (savedSol) {
//             res.json({
//                 exito:true,
//                 mensaje:"Solicitud registrada con exito"
//             })
//         }
//     }
//     catch (e){
//         res.status(500).json({
//             exito:false,
//             mensaje:e.message
//         })
//     }
// })


router.get('/solicitudes',verifyToken,async (req,res)=>{
    try {
        const solicitudes = await Sols.find({fondeado:false})    
        if (solicitudes) {
            res.json({
                exito:true,
                solicitudes:solicitudes
            })
        }
    }
    catch (e){
        res.status(500).json({
            exito:false,
            mensaje:e.message
        })
    }

})

module.exports=router