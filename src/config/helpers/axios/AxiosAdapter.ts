import axios, { AxiosInstance } from 'axios';
import { Enviroment } from '../../constants/Enviroments';
export class AxiosAdapter {
    
   private  api: AxiosInstance;
   constructor(
    private readonly baseURL: string,
   ){
    this.api = axios.create({
        baseURL: this.baseURL,
        timeout: 500000,
        headers: {
            'Content-Type': 'application/json',
        }
   })
   }

     async get(url: string) {
    if(!url)  throw new Error('URL is required');

     return await this.api.get(url);
    }
   
}