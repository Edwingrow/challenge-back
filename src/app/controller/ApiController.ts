import { Request, Response } from "../../config/server/http";

export class ApiController {

    public index(_request: Request, response: Response) { 
        response.json({
            message: 'Hello World'
        })
    }
} 