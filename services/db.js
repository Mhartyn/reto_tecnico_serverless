const AWS = require('aws-sdk');
const DYNAMODB_REGION = String(process.env.AWS_DYNAMODB_REGION);


export const dinamodbClient = new AWS.DynamoDB.DocumentClient({
    region: DYNAMODB_REGION
});
  