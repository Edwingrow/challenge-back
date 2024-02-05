import { NextFunction } from "express";
import { Request, Response } from "../../config/server/http";
import { JwtAdapter } from "../../config/helpers/credentials/JwtAdapter";
export class AuthTokenMiddleware {
    static validateJWT = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const authorization = req.header('Authorization');
    
          if (!authorization || !authorization.startsWith('Bearer')) {
            return res.status(401).json({ error: true, message: 'Token not found or invalid' });
          }
    
          const token = authorization.split(' ')[1] || '';
    
          const payload = await JwtAdapter.validateToken(token);
    
          if (!payload) {
            return res.status(401).json({ error: true, message: 'Token invalid' });
          }
    
          next();
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      };
    }