const categorias = require('../categoria');
//const Categoria_Controller = require('../controllers/Categoria_Controller');
const equipos = require('../equipos');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class CategoriaModel{
    ingresar_categoria(categoria){ //verificar que los id de modalidad existan
        categoria.id = uuidv4();
        categorias.push(categoria);
        let resultado = new respuesta(200, "categoria agregada con éxito", categorias); 
        return resultado;
    }
    ver_equipos_por_categoria(id){
        if(equipos.length > 0){
            console.log("Los equipos por categoria son:", categoria);
            var contequipos=[];
            for(i=0; i< equipos.length;i++){
                if (equipos[i].categoria === id){
                    contequipos.push(equipos[i])
                }
            }
            let resultado = new respuesta(200, "consulta de equipos completada con éxito", contequipos); 
            return resultado;
        }else{
            let resultado = new respuesta(404, "no hay equipos registrados", undefined);
        
            return resultado;
            
        }
        
    }
    





}


module.exports = new CategoriaModel();