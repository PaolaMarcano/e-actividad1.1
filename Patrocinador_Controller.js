const Patrocinador_Model = require('../models/Patrocinador_model');

class PatrocinadorController{
    ingresar_patrocinador(req, res, next){
        let agregado = Patrocinador_Model.ingresar_patrocinador(req.body);
        res.status(agregado.codigo).send(agregado.resultado);
    }
    ver_patrocinador(req,res,next){
        let mostrarp= Patrocinador_Model.ver_patrocinador(req.body);
        res.status(mostrarp.codigo).send(mostrarp).resultado
    }

}   

module.exports = new PatrocinadorController();