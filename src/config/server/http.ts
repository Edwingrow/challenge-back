import { Request as req , Response as res } from "express";

/**
 * Separar responsabilidad 
 */
export interface Request extends req {
    data?: any
}

export interface Response extends res {}
