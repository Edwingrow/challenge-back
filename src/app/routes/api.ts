import express, { Router } from "express"
import { ApiController } from "../controller/ApiController"

const router: Router = express()
const controller = new ApiController()

export const ApiRoutes = (): Router => {

    router.get('/', controller.index) 

    return router

    
}