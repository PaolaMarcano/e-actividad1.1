const Equipo_model = require('../models/Equipo_model');

class EquipoController{
    ingresar_equipo(req, res, next){
        let agregado = Equipo_model.ingresar_equipo(req.body);
        res.status(agregado.codigo).send(agregado.resultado);
    }
    ver_equipos(req,res,next){
        let mostrarequipos = Equipo_model.ver_equipos();
        res.status(mostrarequipos.codigo).send(mostrarequipos).resultado
    }
    ver_equipos_views(){
        let mostrarequipos= Equipo_model.ver_equipos_views();
        if(mostrarequipos){
            return mostrarequipos; 
        }else{
            return mostrarequipos;
        }   
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
    eliminar_categoria_inscrita(req, res, next){
        let id = req.params.index;
        let eliminar_categoria = Equipo_model.eliminar_categoria_inscrita(id);
        res.status(eliminar_categoria.codigo).send(eliminar_categoria);  
    }
}

module.exports = new EquipoController();