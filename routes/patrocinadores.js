var express = require('express');
var router = express.Router();
const Patrocinador_Controller = require('../controllers/Patrocinador_Controller');

/* GET user. */

router.get('/nuevoPatrocinador',function(req, res, next){
   res.render('nuevoPatrocinador',{title: 'Crear un Patrocinador'});
})  

router.get('/', Patrocinador_Controller.ver_patrocinador);
//router.get('/');

//router.get('/:index');

/* POST new user. */

router.post('/nuevoPatrocinador', Patrocinador_Controller.ingresar_patrocinador_views);

//router.post('/', Patrocinador_Controller.ingresar_patrocinador);

//router.post('/', Patrocinador_Controller.ingresar_patrocinador);

/* PUT user. */
//router.put('/:index');

/* DELETE user. */
//router.delete('/:index'); 

module.exports = router; 