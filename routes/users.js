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
router.get('/', async (req, res) => {
  // res.send('respond with a resource'); 
  // Find all users
  const users = await User.findAll();
  res.json(users);
});

// Get by ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  // do something with the user id
  const user = await User.findByPk(userId);
  res.json(user)
});

// delete user check if exists and push error

// swagger
/**
 * @swagger
 * /users/{id}:
 * delete:
 *  description: Delete user by id
 * 
 * 
 */
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  await User.findByPk(userId)
    .then((user) => {
      if (user) {
        user.destroy();
        res.status(204).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    });
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
