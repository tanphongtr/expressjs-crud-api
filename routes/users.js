var express = require('express');
var router = express.Router();

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

module.exports = router;
