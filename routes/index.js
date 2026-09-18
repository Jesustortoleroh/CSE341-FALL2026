const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1.js');


routes.get('/', lesson1Controller.roseRoute);
routes.get('/peter', lesson1Controller.peterRoute);
routes.get('/carla', lesson1Controller.carlaRoute);

module.exports = routes;