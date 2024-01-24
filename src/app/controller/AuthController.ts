import { GenerateDate } from '../../config/helpers/date/GenerateDate';
import { Request, Response } from '../../config/server/http';
import { AuthCredentialsUseCase } from '../../core/application/auth/AuthCredentialsUseCase';

export class AuthController {
    constructor(
        private readonly authCredentialUseCase: AuthCredentialsUseCase
    ) {}

    async login(request: Request, response: Response) {
    const userName = request.body.email;
   const  token =  await this.authCredentialUseCase.login(userName);
    response.json({
      email: userName,
      success: true,
      token: token,
      expiretIn: GenerateDate.generateExpirationDate(),
      error: false
    });

}
  
}