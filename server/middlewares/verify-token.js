const jwt = require('jsonwebtoken')

module.exports=function(req,res,next){
    let token=req.header["x-access-token"] || req.header["authorization"]
    let checkBearer='Bearer '
    if (token){
        if (token.startsWith(checkBearer)){
            token=token.slice(checkBearer.length,token,length)
        }
        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            if (err){
                res.json({
                    success:false,
                    message:"Token invalido"
                })
            } else {
                req.decoded=decoded
                next()
            }
        } )
    } else {
        res.json({
            success:false,
            message:"No token Provided"
        })
    }
}