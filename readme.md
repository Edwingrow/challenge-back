Backend del Challenge

API creada con Nodejs utilizando Typescript, estructurada con arquitectura hexagonal.

## Dependencias
Primero debemos instalar las dependencias

```bash
cd /challenge-back 
npm install
```
Es necesario generar un archivo de variables de entorno `.env` para esto podemos hacer una copia del archivo `.env.example` y cambiarle el nombre a .env

```bash
# Configuración generál de la api
APP_PREFIX=/api/v1
APP_PORT=3000

# Credenciales de email y password
CLIENT_EMAIL= 
CLIENT_PASS= 

# Para manejar sesiones su clave secreta y tiempo
TOKEN_SECRET=
SESSION_TIME=

#URL de la api de pokemon
URL_POKE_API=https://pokeapi.co/api/v2
```

El siguiente paso es configurar el servidor en la siguientes variables:

- `APP_PREFIX`: Con esta variable podemos configurar el prefijo que manejará la url de la api, es decir, si tenemos escrito `/api/v1` y levantamos un servidor en el puerto 3000 la url final será: `http//localhost:3000/api/v1`
- `APP_PORT`: Puerto en el que correrá el servidor de nodejs

Una vez realizada la configuración correspondiente ya podemos correr nuesrto servidor con el comando

```bash
npm run dev
```