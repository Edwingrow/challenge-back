import express, { Router } from "express"

const router : Router = express()

export const  AuthRoutes = () : Router => {

    return express().use('/auth', router)
}
