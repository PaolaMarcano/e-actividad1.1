const equipos = require('../equipos');
//const categorias= require('../categorias');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class EquipoModel{
    ingresar_equipo(equipo){
        equipo.id = uuidv4();
        equipos.push(equipo);
        let resultado = new respuesta(200, "equipo agregado con éxito", equipos); 
        return resultado;
    }    
    ver_equipos(){
        if(equipos.length > 0){
            console.log("Los equipos son:", equipos);
            let resultado = new respuesta(200, "consulta de equipos completada con éxito", equipos); 
            return resultado;
        }else{
            let resultado = new respuesta(404, "no hay equipos registrados", undefined);
            return resultado;
        }
    }  
    
    

    





}

module.exports = new EquipoModel();