const router=require('express').Router()
const User=require('../models/user')
const Recompensa=require('../models/recompensa')
const Deposito =require('../models/deposito')
const jwt =require('jsonwebtoken')
const moment = require('moment')

router.post('/registro',async(req,res)=>{
    if (!req.body.email || !req.body.password){
        res.json({
            exito:false,
            mensaje:"Ingrese correo o contraseña"
        })
    } else {
        try {
            let newUser=new User()
            newUser.nombre=req.body.nombre
            newUser.email=req.body.email
            newUser.password=req.body.password
            await newUser.save()
            let newDepo=new Deposito()
            newDepo.usuario=newUser._id;
            newDepo.monto=500;
            newDepo.fecha=moment()
            await newDepo.save()
            let newRecom=new Recompensa()
            newRecom.usuario=newUser._id;
            newRecom.fecha=moment()
            newRecom.monto=500;
            await newRecom.save()
    
            let token=jwt.sign(newUser.toJSON(),process.env.SECRET,{
                expiresIn:604800 
            })
            res.json({
                exito:true,
                token:token,
                mensaje:"nuevo usuario creado exitosamente"
            })            
        } catch (error) {
            
            res.status(500).json({
                exito:false,
                mensaje:error.message
            })
        }
    }
})

router.post('/login',async(req,res)=>{
    try {
        
        let usuario=await User.findOne({email:req.body.email})        
        if (usuario) {
            if (usuario.comparePassword(req.body.password)) {
                let token=jwt.sign(usuario.toJSON(),process.env.SECRET,{
                    expiresIn:604800
                })
                let tmpusr = usuario.toObject();
                delete tmpusr['password'];
                res.json({
                    exito:true,
                    usuario:tmpusr,
                    token:token,
                    mensaje:"login exitoso"
                })
            }

        } else {
            res.status(403).json({
                exito:false,
                mensaje:"Usuario no encontrado"
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