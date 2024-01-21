import { GenerateDate } from '../../config/helpers/date/GenerateDate';
import { Request, Response } from '../../config/server/http';
import { AuthCredentialsUseCase } from '../../core/application/auth/AuthCredentialsUseCase';

export class AuthController {
    constructor(
        private readonly authCredentialUseCase: AuthCredentialsUseCase
    ) {}

    async login(request: Request, response: Response) {
   const  token =  await this.authCredentialUseCase.login(request.body.username);
    response.json({
      success: true,
      token: token,
      expiretIn: GenerateDate.generateExpirationDate()
    });

}
  
}