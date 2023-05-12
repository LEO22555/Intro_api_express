import express,{Application, Request, Response, NextFunction} from 'express'
import passport from 'passport'
import dotenv from 'dotenv'
dotenv.config()

import rutas_ejemplo from './rutas_ejemplo'
import rutas_auth from './authRoutes'
import miEstrategia from '../config/passport'

//1. Crear un objeto express

const app:Application=express()

//1.1 Emplear las rutas
app.use('/auth', rutas_auth)

//Poteger las siguientes rutas
passport.use(miEstrategia)

app.use(passport.initialize())
app.use('/', passport.authenticate('jwt', {session:false}), rutas_ejemplo)


//2. Respuesta cuando el recurso no existe 
app.use ((req: Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:"Upss! lo que pidió no existe!"})
})

//3. Respuesta cuando existe un error de servidor
export default app
