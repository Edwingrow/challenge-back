import * as dotenv from 'dotenv';

export class Enviroment {
    public static initEnvironments() {
        dotenv.config({
          path: this.environmentPath()
        });
      }
    
      private static environmentPath(): string {
        const env = process.env.NODE_ENV || 'env';
        return `.${env}`;
      }
    public static nodeEnv () : string {
        return this.getEnv('NODE_ENV') ?? 'env'
    }

    public static getEnv (name : string) : string | undefined {
        return process.env[name] 
    } 

    public static getPort (name: string): number {
        return Number(this.getEnv(name))
    }
}