const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'User API',
    description: 'Documentation for user API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json'; // Swagger JSON file will be generated here
const endpointsFiles = ['./routes/routes.js']; // Path to the app or routes file

swaggerAutogen(outputFile, endpointsFiles, doc);