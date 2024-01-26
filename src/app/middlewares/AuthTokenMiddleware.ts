import { NextFunction } from "express";
import { Request, Response } from "../../config/server/http";
import { JwtAdapter } from "../../config/helpers/credentials/JwtAdapter";
export class AuthTokenMiddleware {
    static  validateJWT = async (req: Request, res:Response, next: NextFunction) => {
        const autorization =  req.header('Authorization')
       
        if(!autorization) {
            return res.status(400).json({
                message: 'Token not found'
            })
        }
        if(!autorization.startsWith('Bearer')) return res.status(401).json({error: true, message: 'Token invalid'})
        const token = autorization.split(' ').at(1) || ''

        try {
            const payload =  await JwtAdapter.validateToken(token)
            if(!payload) return res.status(401).json({error: true, message: 'Token invalid'})
           
            next()
        }
        catch (error) {
            console.log(error)
            res.status(500).json({error: 'Internal server Error'})
        }
       
    }
}