import express,{Application, Request, Response, NextFunction} from 'express'

//1. Crear un objeto express

const app:Application=express()

//2. Respuesta cuando el recurso no existe
app.use ({req:Request, res:Response, next:NextFunction}=>{
    res.status(404).json({message:"Upss! lo que pidió no existe!"})
})

//3. Respuesta cuando existe un error de servidor
export default app
