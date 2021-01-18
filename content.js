'use strict';

module.exports.createContent = async event => {
    // Parsde body to object
    var body = event.body;
    var parsebody = JSON.parse(body);
    if (!global.contentList){
        global.contentList = [];
    }
    console.log(`content List before push ${JSON.stringify(global.contentList)}`);
    global.contentList.push(parsebody);
    console.log(`content List after push ${JSON.stringify(global.contentList)}`);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Create Content Page'

            },
        ),
    };
};
module.exports.contentList = async event => {
    console.log(`content List display ${JSON.stringify(global.contentList)}`);

    return {
        statusCode: 200,
        body: JSON.stringify(
            global.contentList
        ),
    };
};