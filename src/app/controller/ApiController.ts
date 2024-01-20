import { Request, Response } from "../../config/server/http";

export class ApiController {

    public index(request: Request, response: Response) { 
       request.headers.authorization = request.headers.authorization?.replace('Bearer ', '')
         response.json({
              success: true,
              message: 'Welcome to the API',
              user: request.user
         })
    }
} 