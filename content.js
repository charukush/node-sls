'use strict';
var AWS = require('aws-sdk');

module.exports.contentAdded = async event => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    var body = event.body;
    var parseBody = JSON.parse(body);
    var param = {
      TableName: "content",
      Item : parseBody
    };
    try{
      var resp = await docClient.put(param).promise();
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Content Added',
          },
        ),
      };
    }
    catch(err){
      return {
        statusCode: 500,
        body: JSON.stringify(
          {
            message: `Content adding failed: ${err.message}`,
          },
        ),
      };
    }
    
  
    
  };

  module.exports.contentDisplay = async event => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
      TableName: "content",
    };
    var resp = await docClient.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(
        resp
      ),
    };
  
    
  };
// Delete content by id
  module.exports.contentDelete = async event => {
    var id = event.pathParameters.id;
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
      TableName: "content",
      Key:{
        "id": id
      },
    };
    try{
      await docClient.delete(params).promise();
    }
    catch(err){
      console.error(`error = ${err.message}`);
    }
    return {
      statusCode: 200,
      body: JSON.stringify(
        {message:"Item Deleted"}
      ),
    };
  
    
  };