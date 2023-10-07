const Categoria_model = require('../models/Categoria_model');

class CategoriaController{
    ingresar_categoria(req, res, next){
        let agregada = Categoria_model.ingresar_categoria(req.body);
        res.status(agregada.codigo).send(agregada.resultado);
    }
    editar_categoria(req, res, next){
        let actualizar = req.body;
        let id = req.params.index;
        let editado = Categoria_model.editar_categoria(id, actualizar);
        res.status(editado.codigo).send(editado);
    }
    eliminar_categoria(req, res, next){
        let id = req.params.index;
        let eliminar = Categoria_model.eliminar_categoria(id);
        res.status(eliminar.codigo).send(eliminar);  
    }
}

module.exports = new CategoriaController();