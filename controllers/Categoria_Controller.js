const Categoria_model = require('../models/Categoria_model');

class CategoriaController{
    ingresar_categoria(req, res, next){
        let agregada = Categoria_model.ingresar_categoria(req.body);
        res.status(agregada.codigo).send(agregada.resultado);
    }
}

module.exports = new CategoriaController();