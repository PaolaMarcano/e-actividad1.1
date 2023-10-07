const Equipo_model = require('../models/Equipo_model');

class EquipoController{
    ingresar_equipo(req, res, next){
        let agregado = Equipo_model.ingresar_equipo(req.body);
        res.status(agregado.codigo).send(agregado.resultado);
    }

    ver_equipos(req,res,next){
        let mostrarequipos= Equipo_model.ver_equipos(req.body);
        res.status(mostrarequipos.codigo).send(mostrarequipos).resultado
    }


}

module.exports = new EquipoController();