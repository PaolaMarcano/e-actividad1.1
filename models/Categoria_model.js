const categorias = require('../ejemplos/categorias');
const respuesta = require('../models/Respuesta')
const { v4: uuidv4 } = require('uuid');

class Categoria{
    constructor(id, id_modalidad, nombre, descripcion, premio){
        this.id = id,
        this.id_modalidad = id_modalidad,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.reglas = [],
        this.premio = premio
    }
    agregar_reglas(regla){
        this.reglas.push(regla);
    }
}

class CategoriaModel{
    ingresar_categoria(categoria){ //verificar que los id de modalidad existan
        categoria.id = uuidv4();
        let nueva_categoria = new Categoria(categoria.id, categoria.id_modalidad, categoria.nombre, categoria.descripcion, categoria.premio);
        for (let i = 0; i < categoria.reglas.length; i++) {
            nueva_categoria.agregar_reglas(categoria.reglas[i])
        }
        categorias.push(nueva_categoria);
        let resultado = new respuesta(200, "categoria agregada con éxito", categorias); 
        return resultado;
    }
}

module.exports = new CategoriaModel();