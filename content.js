'use strict';
var contentList = []
// add content
module.exports.createContent = async event => {

  var body = event.body;
  var parsebody = JSON.parse(body);
   contentList.push(parsebody);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Added',
          
        },

      ),
    };
  
   
    
  };
  //Content List
module.exports.contentList = async event => {

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: contentList,
          
        },

      ),
    };
  
   
    
  };