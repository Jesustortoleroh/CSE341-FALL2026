const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description:
      'API for managing contacts. CSE 341 Personal Project - BYU-Idaho.',
    version: '1.0.0',
    contact: {
      name: 'Jesus Tortolero',
    },
  },
  host: 'cse341-fall2026.onrender.com',
  schemes: ['https'],
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'Blue',
      birthday: '1990-01-01',
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('✅ swagger.json generated successfully.');
});