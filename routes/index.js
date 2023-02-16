var express = require('express');
var router = express.Router();

/* GET home page. */
/**
 * @swagger
 * /:
 *  get: 
 *    description: Obtém a lista de clientes
 *    responses:
 *      '200': 
 *        description: Clientes obtidos com sucesso 
 */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({ api: 'available' })
});

module.exports = router;
