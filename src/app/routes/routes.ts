import { Router } from "express";
import { AuthRoutes } from "./auth";
import { ApiRoutes } from "./api";
import { PokemonRoutes } from "./pokemon";

export const AppRoutes = (): Router[] => [
    ApiRoutes(),  
    AuthRoutes(),
    PokemonRoutes()
]