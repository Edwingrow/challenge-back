import express, { Router } from "express"

const router : Router = express()

export const  PokemonRoutes = () : Router => {

    return express().use('/auth', router)
}
