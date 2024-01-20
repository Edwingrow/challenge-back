import { AuthRepository } from "../../domain/repositories/AuthRepository";

export class AuthCredentialsUseCase {
    constructor( private readonly authRepository : AuthRepository) {
       
    }
    public async login(username:string) : Promise<any> {
        const accessToken =   await this.authRepository.login(username); 
        return accessToken;
    }
}