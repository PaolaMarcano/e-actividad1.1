var express = require('express');
var router = express.Router();
const Categoria_Controller = require('../controllers/Categoria_Controller');

/* GET user. */
//router.get('/');

//router.get('/:index');

/* POST new user. */
router.post('/', Categoria_Controller.ingresar_categoria);

/* PUT user. */
//router.put('/:index');

/* DELETE user. */
//router.delete('/:index'); 

module.exports = router; 