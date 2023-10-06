var express = require('express');
var router = express.Router();
const Equipos_Controller = require('../controllers/Equipos_Controller')

/* GET user. */
//router.get('/');

//router.get('/:index');

/* POST new user. */
router.post('/', Equipos_Controller.ingresar_equipo);

/* PUT user. */
router.put('/:index', Equipos_Controller.editar_equipo);

/* DELETE user. */
router.delete('/:index', Equipos_Controller.eliminar_equipo); 

module.exports = router; 