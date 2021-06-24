# Api Rest en NODEJS con framework serverless

Esta aplicacion es una api rest creada con el framework serverless y deployada en AWS

## Desplegar sin errores en AWS con el comando deploy del framework serverless

```sh
npm run deploy
```

_**OR**_

```sh
sls deploy
```

## endpoints

## endpoints api startwards

GET - https://6jmr4hfe90.execute-api.us-east-2.amazonaws.com/dev/endpoint/v1/startwards/people
GET - https://6jmr4hfe90.execute-api.us-east-2.amazonaws.com/dev/endpoint/v1/startwards/people/{people_id}


## enpoints para base dinamodb

GET - https://6jmr4hfe90.execute-api.us-east-2.amazonaws.com/dev/endpoint/v1/users
POST - https://6jmr4hfe90.execute-api.us-east-2.amazonaws.com/dev/endpoint/v1/users
