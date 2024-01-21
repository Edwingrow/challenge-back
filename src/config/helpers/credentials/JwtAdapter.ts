import jwt from 'jsonwebtoken';
import { Enviroment } from '../../constants/Enviroments';
import crypto from 'crypto';




export class JwtAdapter {

    static async generateToken( 
        payload: Object, 
        duration: string = '2h' ): Promise<string|null> {
        const JWT_SEED = Enviroment.getEnv('TOKEN_SECRET') ?? '';
        return new Promise( ( resolve ) => {
          jwt.sign( payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
            if ( err ) return resolve(null);
            resolve(token!);
          });
    
    
        } );
    }

    static validateToken(token:string) {
    const JWT_SEED = Enviroment.getEnv('TOKEN_SECRET') ?? '';

    return new Promise((resolve) => {
        jwt.verify(token,JWT_SEED, (err, decoded) => {
            if(err) return resolve(null);
            
            resolve(decoded);
        })
    })
}
static generateSecretToken(): string {
  try {
    const secretKey = crypto.randomBytes(32).toString('hex');
    return secretKey;
  } catch (error) {
    console.error('Error al generar la secretKey:', error);
    throw new Error('Error al generar la secretKey');
  }
}
}