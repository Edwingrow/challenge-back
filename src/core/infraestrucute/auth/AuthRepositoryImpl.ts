import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { JwtAdapter } from "../../../config/helpers/credentials/JwtAdapter";

export class AuthRepositoryImpl implements AuthRepository {
    login(username: string): Promise<any> {
        try {
            const token = JwtAdapter.generateToken({username: username})
            return token
       
      } catch (error) {
         throw new Error('Error al generar la secretKey' + error);
         
      }
    } 
    
}