var express = require('express');
var router = express.Router();
const Equipos_Controller = require('../controllers/Equipos_Controller')
const Categoria_Controller = require('../controllers/Categoria_Controller');

/* GET user. */
//router.get('/', Equipos_Controller.ver_equipos);

//router.get('/:index');

router.get('/', Equipos_Controller.ver_equipos);

router.get('/verEquipos',function(req, res, next){
    let equipos = Equipos_Controller.ver_equipos_views()
    let categorias = Categoria_Controller.mostrar_categorias()
    console.log(equipos)
   res.render('verEquipos',{title: 'Equipos', equipos: equipos, categorias: categorias});
})  

/* POST new user. */
router.post('/', Equipos_Controller.ingresar_equipo);

/* PUT user. */
router.put('/:index', Equipos_Controller.editar_equipo);

/* DELETE user. */
router.delete('/:index', Equipos_Controller.eliminar_equipo); 

router.delete('/sin_categoria/:index', Equipos_Controller.eliminar_categoria_inscrita); 

module.exports = router; 