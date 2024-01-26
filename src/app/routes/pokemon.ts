import express, { Router } from "express"
import { PokemonController } from "../controller/PokemonController"
import { AuthTokenMiddleware } from "../middlewares/AuthTokenMiddleware"
import { PokemonRepositoryImpl } from "../../core/infraestrucute/pokemon/PokemonRepositoryImpl"
import { AuthParamsPokemon } from "../middlewares/AuthParamsPokemon"

const router : Router = express()

const controller = new PokemonController(new PokemonRepositoryImpl())
export const  PokemonRoutes = () : Router => {

    router.get('/all', AuthTokenMiddleware.validateJWT, (req, res) => controller.getListPokemon(req, res))  
    router.get('/:name', AuthTokenMiddleware.validateJWT, AuthParamsPokemon.validateParams, (req, res) => controller.getPokemonbyName(req, res))
    
    return express().use('/pokemon', router)
  
}
