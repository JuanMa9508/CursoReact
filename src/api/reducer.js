
let init = {
    links : ["perfil","portfolio","contacto"],
    contador : 0,
    formvisible:true,
    nombre: "",
    apellido:"",
    usuarios: [],
    editable : -1

}

let reducer = (prev=init,action) =>{
    switch(action.type){
        
        case "FORMULARIO_SUBMIT" : 
           
            return {...prev,
                usuarios : [
                    ...prev.usuarios,
                    {
                        nombre: prev.nombre,
                        apellido : prev.apellido
                    }
                ],
                nombre: "",
                apellido: ""
            
            }
        case "FORMULARIO_EDIT" :
        let copia_usuarios = [...prev.usuarios]
        copia_usuarios[prev.editable].nombre = prev.nombre
        copia_usuarios[prev.editable].apellido = prev.apellido  
        return {...prev,usuarios : copia_usuarios}

        case "FORMULARIO_CHANGE" :
            return {...prev,[action.id]:action.valor}          

        case "FORMULARIO_MOSTRAR":
            return {...prev,formvisible: !prev.formvisible}
           
        case "LISTADOUSUARIOS_BORRAR" :
            return {...prev,
                usuarios : [
                    ...prev.usuarios.slice(0,action.i),...prev.usuarios.slice(action.i+1)
                ]          
            }

        case "LISTADOUSUARIOS_EDITAR":
            return { ...prev,editable : action.i,nombre : prev.usuarios[action.i].nombre,apellido :prev.usuarios[action.i].apellido }     

        case "CONTADOR_AUMENTAR" :
            return {...prev,contador: prev.contador +1}
 
        case "CONTADOR_DISMINUIR" :
            return {...prev,contador : prev.contador -1}

        case "CONTADOR_REINICIAR" :
            return {...prev, contador : 0}
        default:
            return prev
    }

}

export default reducer