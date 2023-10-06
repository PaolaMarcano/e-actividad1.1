const Patrocinador_Model = require('../models/Patrocinador_model');

class PatrocinadorController{
    ingresar_patrocinador(req, res, next){
        let agregado = Patrocinador_Model.ingresar_patrocinador(req.body);
        res.status(agregado.codigo).send(agregado.resultado);
    }
}

module.exports = new PatrocinadorController();