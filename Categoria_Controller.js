const Categoria_model = require('../models/Categoria_model');
//const categorias = require('../categorias');

class CategoriaController{
    ingresar_categoria(req, res, next){
        let agregada = Categoria_model.ingresar_categoria(req.body);
        res.status(agregada.codigo).send(agregada.resultado);
    }
    ver_equipos_por_categoria(req, res, next){
        let mostrarEq= Categoria_model.ver_equipos_por_categoria(req.params.index);
        res.status(mostrarEq.codigo).send(mostrarEq.resultado)
    }
    

}

module.exports = new CategoriaController();