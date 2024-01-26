import { NextFunction } from 'express';
import { Request, Response } from "../../config/server/http";
export class AuthParamsPokemon {
    static validateParams(req:Request, res:Response, next:NextFunction) {
        const { name } = req.params;
        if (!name) {
            return res.status(400).json({ message: 'Name is required', error: true});
        }
        next();
    }
}