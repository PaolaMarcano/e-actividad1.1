const Equipo_model = require('../models/Equipo_model');

class EquipoController{
    ingresar_equipo(req, res, next){
        let agregado = Equipo_model.ingresar_equipo(req.body);
        res.status(agregado.codigo).send(agregado.resultado);
    }
}

module.exports = new EquipoController();