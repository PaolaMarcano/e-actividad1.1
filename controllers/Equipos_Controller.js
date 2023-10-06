const Equipo_model = require('../models/Equipo_model');

class EquipoController{
    ingresar_equipo(req, res, next){
        let agregado = Equipo_model.ingresar_equipo(req.body);
        res.status(agregado.codigo).send(agregado.resultado);
    }
    editar_equipo(req, res, next){
        let actualizar = req.body;
        let id = req.params.index;
        let editado = Equipo_model.editar_equipo(id, actualizar);
        res.status(editado.codigo).send(editado);
    }
    eliminar_equipo(req, res, next){
        let id = req.params.index;
        let eliminar = Equipo_model.eliminar_equipo(id);
        res.status(eliminar.codigo).send(eliminar);   
    }
}

module.exports = new EquipoController();