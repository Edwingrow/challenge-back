import { Response } from "../../server/http";

export const ErrorResponse = (response: Response, error: any) => {
    const status = error.status ?? 500
    response.status(status).json(error.message)
}