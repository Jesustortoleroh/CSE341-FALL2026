const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1.js');


routes.get('/', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);
routes.get('/carla', lesson1Controller.carlaRoute);

module.exports = routes;