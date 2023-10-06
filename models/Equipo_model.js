const equipos = require('../equipos');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class EquipoModel{
    ingresar_equipo(equipo){
        equipo.id = uuidv4();
        equipos.push(equipo);
        let resultado = new respuesta(200, "equipo agregado con éxito", equipos); 
        return resultado;
    }
}

module.exports = new EquipoModel();