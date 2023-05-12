import express,{Router, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
const router: Router = Router()

//1. Definir las rutas
router.get(
    '/hola',
    (req:Request, res:Response)=>{
        res.send('hola')
    }
)

router.get(
    '/login',
    (req:Request, res:Response)=>{

        //TO DO: Obtener eso desde la DB
        //Nunca colocar datos sensibles o importantes en un JWT!
        const payload={
            id:"user_id",
            username:"Leo"
        }

        const options={
            expiresIn:"2h"
        }

        const secretKey= process.env.SECRET_KEY

        if(typeof secretKey == 'string'){
            const token= jwt.sign(payload, secretKey, options)
            res.json({token})
        }

    }


)
export default router