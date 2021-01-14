'use strict';
//obtengo la funcion desde serverlees submit y le paso un mensaje de confirmacion una vez que se despliegue
//esta api a aws;
//posteriormeten retorno la respuesta como json con un callback;
module.exports.submit =(event, context, callback) => {
    const response= {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
        ),
    };
    callback(null,response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
