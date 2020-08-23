'use strict';
const AWS = require('aws-sdk');

module.exports.contentAdded = async event => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    var body = event.body;
    var parseBody = JSON.parse(body);
    
    var params = {
      TableName: "content",
      Item: parseBody
    };
    var resp = await docClient.put(params).promise()
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Content Added!',

        },

      ),
    };
  
    
  };

  module.exports.contentDisplay = async event => {
    // Create connection to DynamoDB
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "content"
    };
    var resp = await docClient.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(
        resp
      ),
    };
  };
  