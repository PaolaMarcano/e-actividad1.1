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
}

module.exports = new PatrocinadorModel();