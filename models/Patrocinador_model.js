const patrocinadores = require('../ejemplos/patrocinadores');
const respuesta = require('../models/Respuesta');
const { v4: uuidv4 } = require('uuid');

class Patrocinador{
    constructor(id, nombre_comercial, persona_de_contacto, telefono, patrocinio, comentario){
        this.id = id,
        this.nombre_comercial = nombre_comercial,
        this.persona_de_contacto = persona_de_contacto,
        this.telefono = telefono,
        this.patrocinio = patrocinio,
        this.comentario = comentario
    }
}

class PatrocinadorModel{
    ingresar_patrocinador(patrocinador){
        patrocinador.id = uuidv4();
        let nuevo_patrocinador = new Patrocinador(patrocinador.id, patrocinador.nombre_comercial, patrocinador.persona_de_contacto, patrocinador.telefono, patrocinador.patrocinio, patrocinador.comentario);
        patrocinadores.push(nuevo_patrocinador);
        let resultado = new respuesta(200, "patrocinador agregado con éxito", patrocinadores); 
        return resultado;
    }
}

module.exports = new PatrocinadorModel();