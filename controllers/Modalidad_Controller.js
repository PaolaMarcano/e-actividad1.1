const Modalidad_Model = require('../models/Modalidad_model');

class ModalidadController{
    ingesar_modalidad(req, res, next){
        let agregada = Modalidad_Model.ingesar_modalidad(req.body);
        res.status(agregada.codigo).send(agregada.resultado);
    }
}

module.exports = new ModalidadController();