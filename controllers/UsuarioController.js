const Usuario = require('../models/Usuario');
const { v4: uuidv4 } = require('uuid');

class UsuarioController{
    ver_usuarios(req, res, next){
        let mostrar = Usuario.mostrar_usuarios()
        if(mostrar){
          console.log(mostrar);          
          res.send(mostrar);  
        }else{
          res.status(404).send('No hay usuarios registrados');
        }   
    } 
    encontrar_usuario(req, res, next){
      console.log('Ingresó:', req.params.index);
      let id = req.params.index;
      let usuario = Usuario.buscar_usuario(id);
      if (usuario !== -1) {
        console.log('Resultado de la consulta:', usuario);
        res.send(usuario);
      } else {
        res.status(404).send('Usuario no encontrado');
      } 
    }
    registrar_usuario(req, res, next){
      let u = req.body
      u.id = uuidv4();
      let nuevo_usuario = new Usuario(u.id, u.usuario)
      let ver = Usuario.guardar_usuario(nuevo_usuario);
      res.send(ver);  
    }
    actualizar_usuario(req, res, next){
      let actualizar = req.body;
      let id = req.params.index;
      let modificar = Usuario.modificar_usuario(id, actualizar);
      if (modificar !== -1) {
        console.log('Usuario encontrado');
        res.send(modificar);
      } else {
        res.status(404).send('Usuario no encontrado');
      } 
    }
    actualizar_datos(req, res, next){
      let actualizar_info = req.body;
      let id = req.params.index;
      let modificar_datos = Usuario.modificar_datos(id, actualizar_info);
      if (modificar_datos !== -1) {
        console.log('Usuario encontrado');
        res.send(modificar_datos);
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    }
    borrar_usuario(req, res, next){
      let id = req.params.index;
      let eliminar = Usuario.eliminar_usuario(id);
        if (eliminar !== -1) {
          console.log('Usuario encontrado');
          res.send(eliminar);   
        } else {
          res.status(404).send('Usuario no encontrado');
        } 
    }
}

module.exports = new UsuarioController();