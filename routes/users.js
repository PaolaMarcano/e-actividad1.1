var express = require('express');
var router = express.Router();
//const usuarios = require('../usuarios');
//const Usuario = require('../models/Usuario');
const UsuarioController = require('../controllers/UsuarioController');

/* GET user. */
router.get('/', UsuarioController.ver_usuarios);

router.get('/:index', UsuarioController.encontrar_usuario);

/* POST new user. */
router.post('/', UsuarioController.registrar_usuario);

/* PUT user. */
router.put('/:index', UsuarioController.actualizar_usuario);

/* DELETE user. */
router.delete('/:index', UsuarioController.borrar_usuario); 

/* PATCH user. */
router.patch('/:index', UsuarioController.actualizar_datos);

module.exports = router; 