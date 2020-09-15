const mongoose = require('mongoose')
const router = require('express').Router()
const verifyToken=require('../middlewares/verify-token')
const moment = require('moment')
const Inversion = require('../models/inversiones')

router.get('/inversionesSolicitud',verifyToken,async(req,res) =>{
    try {
        const inversiones=await Inversion.find({solicitud:req.idSolicitud})
        if (inversiones) {
            res.json({
                exito:true,
                inversiones:inversiones
            })
        }
        
    } catch (error) {
        res.status(500).json({
            exito:false,
            mensaje:"Error al obtener inversiones",
            error:error.message
        })
    }
})

router.post('/inversion',verifyToken,async(req,res)=>{
    try {
        
        const inversiones=req.body.inversiones              
        const arrPromesas=[]
        inversiones.forEach(inversion => {
            let newInv=new Inversion()        
            newInv.usuario=req.decoded._id
            newInv.solicitud=inversion.idSolicitud
            newInv.fecha=moment()
            newInv.monto=inversion.monto;
            arrPromesas.push(newInv.save())
        });        
        const savedInv=await Promise.all(arrPromesas)        
        if (savedInv){
            res.json({
                exito:true,
                mensaje:"Inversion registrada con exito"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            exito:false,
            mensaje:'Error al registrar inversion',
            error:error.message
        })
    }
})

module.exports=router;