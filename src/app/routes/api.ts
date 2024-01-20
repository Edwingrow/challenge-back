import express, { Router } from "express"
import { ApiController } from "../controller/ApiController"
import { AuthTokenMiddleware } from "../middlewares/AuthTokenMiddleware"

const router: Router = express()
const controller = new ApiController()

export const ApiRoutes = (): Router => {

    router.get('/', AuthTokenMiddleware.validateJWT, (req, res) => controller.index(req, res)) 

    return router

    
}