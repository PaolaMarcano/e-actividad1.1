const equipos = require('../ejemplos/equipos');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class Equipo{
    constructor(id, representante, modalidad, email, telefono, nombre_del_equipo, comentario, categoria){
        this.id = id,
        this.representante = representante,
        this.modalidad = modalidad,
        this.email = email,
        this.telefono = telefono,
        this.nombre_del_equipo = nombre_del_equipo,
        this.participantes = [],
        this.comentario = comentario,
        this.categoria = categoria
    }
    agregar_participantes(participante){
        this.participantes.push(participante);
    }
}

class EquipoModel{
    ingresar_equipo(equipo){
        equipo.id = uuidv4();
        let nuevo_equipo = new Equipo(equipo.id, equipo.representante, equipo.modalidad, equipo.email, equipo.telefono, equipo.nombre_del_equipo, equipo.comentario, equipo.categoria);
        for (let i = 0; i < equipo.participantes.length; i++) {
            nuevo_equipo.agregar_participantes(equipo.participantes[i])
        }
        equipos.push(nuevo_equipo);
        let resultado = new respuesta(200, "equipo agregado con éxito", equipos); 
        return resultado;
    }
}

module.exports = new EquipoModel(); 