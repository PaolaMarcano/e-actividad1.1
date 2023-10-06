const modalidades = require('../modalidades');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class ModalidadModel{
    ingesar_modalidad(modalidad){
        modalidad.id = uuidv4();
        modalidades.push(modalidad);
        let resultado = new respuesta(200, "modalidad agregada con éxito", modalidades); 
        return resultado;
    }
}

module.exports = new ModalidadModel();