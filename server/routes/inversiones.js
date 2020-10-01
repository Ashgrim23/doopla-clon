const mongoose = require('mongoose')
const router = require('express').Router()
const verifyToken=require('../middlewares/verify-token')
const moment = require('moment')
const Inversion = require('../models/inversion')
const Solicitud =require('../models/solicitud')

router.get('/TotInvNetas',verifyToken,async(req,res)=>{
    try {
        let inversiones=await Inversion.find({usuario:req.decoded._id}).populate('solicitud','fondeado').exec()
        let invNetas=0;
        let invProceso=0;
        inversiones.forEach(inv=>{
            inv.solicitud.fondeado ? invNetas+=inv.montoInversion : invProceso+=inv.montoInversion             
        })
        res.json({
            exito:true,
            totInversionesNetas:invNetas,
            totInvesionesProceso:invProceso
        })
               
        
    } catch (error) {
        res.status(500).json({
            exito:false,
            mensaje:error.message
        })
    }
})


router.get('/TotInversiones',verifyToken,async(req,res)=>{
    try {
        let inversiones=await Inversion.aggregate([
            
            { $match:{usuario: new mongoose.Types.ObjectId(req.decoded._id)}},
            { $group:{  _id:null,
                        total:{
                                $sum:"$montoInversion"
                            }
                    }
            }
        ])   
        
        let totInv
        inversiones.length>0 ? totInv=inversiones[0].total : totInv=0;                
        res.json({
            exito:true,
            totInversiones:totInv
        })
        
    } catch (error) {
        res.status(500).json({
            exito:false,
            mensaje:error.message
        })
    }
})

router.get('/inversionesSolicitud/:id',verifyToken,async(req,res) =>{
    try {        
        const inversiones=await Inversion.find({solicitud:req.params.id}).populate('usuario','nombre').exec()        
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
        const arrPromesas=[];                            
        inversiones.forEach(inversion => {
            let newInv=new Inversion()        
            newInv.usuario=req.decoded._id
            newInv.solicitud=inversion._id
            newInv.fecha=moment()
            newInv.montoInversion=inversion.montoInversion;
            addInversion(inversion._id,newInv)            
            arrPromesas.push(newInv.save())
        });        
        const savedInv=await Promise.all(arrPromesas)        
        
        if (savedInv){
            res.json({
                exito:true,
                mensaje:"Inversiones registradas con exito"
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

async function addInversion (solicitudId,newInv){
    let sol=await Solicitud.findById(solicitudId).populate('inversiones','montoInversion')       
    let fondeado= sol.statsFondeado.montoFondeado+newInv.montoInversion
    
    if (fondeado>= sol.monto){
        sol.fondeado=true;
        sol.inversiones.push(newInv._id)
        await sol.save()
    }
        
    else {
        await sol.update({$push:{inversiones:newInv._id}})
    }
    
}

module.exports=router;