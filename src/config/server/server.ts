import express,{Request, Response, NextFunction} from 'express';
import morgan from 'morgan'
import cors from 'cors'
import { Enviroment } from '../constants/Enviroments';
import { AppRoutes } from '../../app/routes/routes';
import passport from 'passport';
export class Server  {
    private readonly port: number
    public readonly app = express()
    constructor (){
        this.port = Enviroment.getPort('APP_PORT')
        this.configuration()
    }

   private configuration () : void {
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(passport.initialize());

        //Rutas del servidor
        this.app.use( 
          Enviroment.getEnv('APP_PREFIX') ?? '',
            ( _request: Request, _response: Response, next: NextFunction ) => {
                next()
            },
            AppRoutes()
        );

   }

   public run(): void {
    this.app.listen(this.port, () => {
        console.log(`
        ------------------------------------------------
        🛡️  Server listening on port: ${this.port} 🛡️
        ------------------------------------------------`)
    }).on('error', error => {
        console.error(error)
        process.exit(1)
    })
}
}