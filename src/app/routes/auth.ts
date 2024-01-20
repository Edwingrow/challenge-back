import express, { Router } from "express"
import { Request, Response } from '../../config/server/http';
import { AuthController } from "../controller/AuthController"
import { AuthClientMiddleware } from "../middlewares/AuthClientMiddleware"
import { AuthRepository } from '../../core/domain/repositories/AuthRepository';
import { AuthRepositoryImpl } from "../../core/infraestrucute/auth/AuthRepositoryImpl";
import { AuthCredentialsUseCase } from "../../core/application/auth/AuthCredentialsUseCase";
import { JwtAdapter } from "../../config/helpers/credentials/JwtAdapter";

const router : Router = express()
const authRepository: AuthRepository = new AuthRepositoryImpl()
const authCredentialUseCase : AuthCredentialsUseCase = new AuthCredentialsUseCase(authRepository)
const controller  = new AuthController(authCredentialUseCase)
export const  AuthRoutes = () : Router => {
    router.post('/login', AuthClientMiddleware(), (req: Request, res: Response) => controller.login(req, res));
    router.post('/credentials',(_req: unknown, res:any) => {
        res.json({
            token_secret: JwtAdapter.generateSecretToken()
        })
    })
    return router 
}
