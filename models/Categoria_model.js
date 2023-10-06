const categorias = require('../categorias');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class CategoriaModel{
    ingresar_categoria(categoria){ //verificar que los id de modalidad existan
        categoria.id = uuidv4();
        categorias.push(categoria);
        let resultado = new respuesta(200, "categoria agregada con éxito", categorias); 
        return resultado;
    }
}


module.exports = new CategoriaModel();