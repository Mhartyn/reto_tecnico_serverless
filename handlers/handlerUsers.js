const { v4: uuidv4 } = require('uuid');
const { dinamodbClient } = require('../services/db');
const DYNAMODB_TABLE =  String(process.env.AWS_DYNAMODB_TABLE);
const response = require('../utils/response');

export const registerUser = async (event) => {
        try {
          const body = JSON.parse(event.body);
          const data = {
            TableName: DYNAMODB_TABLE,
            Item: {
              id: String(uuidv4()),
              last_name: body.last_name,
              first_name: body.first_name,
              phone: body.phone,
              email: body.email,
              createdAt: new Date().toISOString(),
            },
          }
      await dinamodbClient.put(data).promise();
      return response(201, {
        status:'ok',
        message:'usuario  registrado'
      });
    } catch (error) {
      return response(500, {
        status:'error',
        error: "error al registrar usuario"
      })
    }
  };


export const getUsers = async () => {
  try {
    let data = await dinamodbClient.scan({TableName: DYNAMODB_TABLE}).promise();
    if(!data.Items){
      return response(404, {
        status:'error',
        error: "No existen usuarios"
      })}

    return response(200, {
      status:'ok',
      message:'se han listado los datos correctamente',
      datas: data.Items
    });
  } catch (error) {
    return response(500, {
      status:'error',
      error: "error al listar los usuarios de dinamodb"
    });
  }
} 