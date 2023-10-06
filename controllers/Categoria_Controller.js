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
}

module.exports = new CategoriaController();