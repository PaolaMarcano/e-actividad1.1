var express = require('express');
var router = express.Router();
const Equipos_Controller = require('../controllers/Equipos_Controller')

/* GET user. */


router.get('/', Equipos_Controller.ver_equipos);

//router.get('/:index');

/* POST new user. */
router.post('/', Equipos_Controller.ingresar_equipo);

/* PUT user. */
//router.put('/:index');

/* DELETE user. */
//router.delete('/:index'); 

module.exports = router; 