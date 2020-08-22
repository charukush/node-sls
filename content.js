'use strict';
 var createList = [];
module.exports.contentAdded = async event => {
    var body = event.body;
    var parseBody = JSON.parse(body);
    createList.push(parseBody);
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

    return {
      statusCode: 200,
      body: JSON.stringify(
          createList 


      ),
    };
  
    
  };
  