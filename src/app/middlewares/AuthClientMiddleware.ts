import { NextFunction } from 'express';
import { Request, Response } from "../../config/server/http";
import { JwtAdapter } from "../../config/helpers/credentials/JwtAdapter";

export class AuthClientMiddleware {
    static  validateJWT = async (req: Request, res:Response, next: NextFunction) => {
        const autorization =  req.header('Authorization')
       
        if(!autorization) {
            return res.status(400).json({
                message: 'Token not found'
            })
        }
        if(!autorization.startsWith('Bearer')) return res.status(401).json({error: 'Token invalid'})
        const token = autorization.split(' ').at(1) || ''

        try {
            const payload =  await JwtAdapter.validateToken(token)
            if(!payload) return res.status(401).json({error: 'Token invalid'})
           
            next()
        }
        catch (error) {
            console.log(error)
            res.status(500).json({error: 'Internal server Error'})
        }
       
    }
    static ValidateCredentials = async (req: Request, res:Response,next: NextFunction) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ success: false, message: 'Se requieren correo electrónico y contraseña.', error: true });
        }
    
        const userName = req.body.email;
        const password = req.body.password;
    
        if (userName !== 'edwingrow16@gmail.com' || password !== '0dtsoo4q') {
            return res.status(400).json({ success: false, message: 'Correo electrónico o contraseña incorrectos.', error: true });
        }
    
        next();
    }
}