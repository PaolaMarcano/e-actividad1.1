var express = require('express');
var router = express.Router();
const Modalidad_Controller = require('../controllers/Modalidad_Controller');

/* GET user. */
//router.get('/');

//router.get('/:index');

/* POST new user. */
router.post('/', Modalidad_Controller.ingesar_modalidad);

/* PUT user. */
//router.put('/:index');

/* DELETE user. */
//router.delete('/:index'); 

/* PATCH user. */
//router.patch('/:index');

module.exports = router; 