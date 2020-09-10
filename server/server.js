const express=require('express')
const morgan=require('morgan');
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const dotenv =require('dotenv')
const cors=require('cors')

dotenv.config()

const app=express()

mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true,useUnifiedTopology:true},
    err=>{
        if (err){
            console.log(err)
        } else {
            console.log("Conectado a mongodb")
        }
    })

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const usrRoutes = require('./routes/auth')
const depoRoutes=require('./routes/depositos')

app.use('/api',usrRoutes)
app.use('/api',depoRoutes)

app.listen(3001,(err)=>{
    if (err){
        console.log(err)
    } else {
        console.log("puerto 3001")
    }
})