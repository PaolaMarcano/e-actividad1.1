const patrocinadores = require('../patrocinadores');
const respuesta = require('../models/Respuesta');
const { v4: uuidv4 } = require('uuid');

class PatrocinadorModel{
    ingresar_patrocinador(patrocinador){
        patrocinador.id = uuidv4();
        patrocinadores.push(patrocinador);
        let resultado = new respuesta(200, "patrocinador agregado con éxito", patrocinadores); 
        return resultado;
    }
    ver_patrocinador(){
        if(patrocinadores.length > 0){
            console.log("Los patrocinadores son:", patrocinadores);
            let resultado = new respuesta(200, "consulta completada con éxito", patrocinadores); 
            return resultado;
        }else{
            let resultado = new respuesta(404, "no hay patrocinadores registrados", undefined);
            return resultado;
        }

    }





}

module.exports = new PatrocinadorModel();