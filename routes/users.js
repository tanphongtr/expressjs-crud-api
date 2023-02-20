var express = require('express');
var router = express.Router();
var User = require('../models').User;

// use middleware
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

/* GET users listing. */
/**
 * @swagger
 * /users:
 *  get: 
 *    description: Obtém a lista de clientes
 *    responses:
 *      '200': 
 *        description: Clientes obtidos com sucesso 
 */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource'); 
  res.json({ user: 'geek' });
});

// async router create user
/**
 * @swagger
 * /users:
 *  post: 
 *    description: Obtém a lista de clientes
 *    body:
 *     type: object
 *    properties:
 *     name:
 *     type: string
 *    responses:
 *      '200': 
 *        description: Clientes obtidos com sucesso 
 */
router.post('/', (req, res) => {
  User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: '',
  }).then((user) => {
    res.status(201).json(user);
  });
});

module.exports = router;
