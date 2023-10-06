var express = require('express');
var router = express.Router();
const Patrocinador_Controller = require('../controllers/Patrocinador_Controller');

/* GET user. */
//router.get('/');

//router.get('/:index');

/* POST new user. */
router.post('/', Patrocinador_Controller.ingresar_patrocinador);

/* PUT user. */
//router.put('/:index');

/* DELETE user. */
//router.delete('/:index'); 

module.exports = router; 