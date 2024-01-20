import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local';
export const AuthClientMiddleware = () => {
 
    passport.use(new LocalStrategy(
        function(username:string, password:string, done) {
          // Verifica las credenciales del usuario
          if (username !== 'edwingrow16@gmail.com' || password !== '0dtsoo4q') {
            return done(null, false, { message: 'Credenciales inválidas' });
          }
      
          const user = { id: username };
          return done(null, user);
        }
      ));

    return passport.authenticate('local', { session: false });
};
