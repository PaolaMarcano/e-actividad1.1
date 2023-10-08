var express = require('express');
var router = express.Router();
const Categoria_Controller = require('../controllers/Categoria_Controller');

/* GET user. */
//router.get('/');
router.get('/:index', Categoria_Controller.ver_equipos_por_categoria);

//router.get('/:index');

/* POST new user. */
router.post('/', Categoria_Controller.ingresar_categoria);

/* PUT user. */
router.put('/:index', Categoria_Controller.editar_categoria);

/* DELETE user. */
router.delete('/:index', Categoria_Controller.eliminar_categoria); 

module.exports = router; 