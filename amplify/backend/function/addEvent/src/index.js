const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (e, context, callback) => {
    const requestId = context.awsRequestId;
    await addEvent(requestId).then(() => {
        callback(null, {
            statusCode: 201,
            body: '',
            headers: {
                'Access-Control-Allow-Origin' : '*',
            }
        })
    }).catch((err) => {
        console.error(err);
    })
};

function addEvent(requestId) {
    const params = {
        TableName: 'cofc-events',
        Item: {
            'eventId' : 1,
            'cofcEventName' : 'Nine Inch Nails Concert'
        }
    }
    return ddb.put(params).promise();
}