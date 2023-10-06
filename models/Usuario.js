const usuarios = require('../usuarios');

class Usuario{
    constructor(id, usuario){
        this.id = id;
        this.usuario = usuario;
    }
    static mostrar_usuarios(){
        if(usuarios.length > 0){        
            return usuarios;  
        }else{
            return false;
        } 
    }
    static buscar_usuario(id){
        let i = usuarios.findIndex(us => us.id == id);
        if(i !== -1){
            return usuarios[i];
        }else{
            return i;
        }
    }
    static guardar_usuario(nuevo){
        usuarios.push(nuevo);
        return usuarios;
    }
    static modificar_usuario(id, actualizar){
        let i = usuarios.findIndex(us => us.id == id);
        if (i !== -1) {
            usuarios[i] = actualizar;
            return usuarios[i];
        }else{
            return i;
        }
    }
    static modificar_datos(id, actualizar){
        let i = usuarios.findIndex(us => us.id == id);
        if (i !== -1) {
            Object.assign(usuarios[i], actualizar);
            return usuarios[i];
        } else {
            return i;
        }
    }
    static eliminar_usuario(id){
        let i = usuarios.findIndex(us => us.id == id);
        if (i !== -1) {
            usuarios.splice(i,1);
            return usuarios;   
        } else {
            return i;
        } 
    }
}

module.exports = Usuario;