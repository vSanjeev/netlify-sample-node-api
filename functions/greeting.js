exports.handler = async (event, context) => {
    const name = event.queryStringParameters.name || 'World';
    const response = {
      statusCode: 200,
      body: `Hello, ${name}!`,
    };
    return response;
  };
  