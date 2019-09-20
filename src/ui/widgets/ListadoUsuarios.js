import React,{Component} from "react"
import {connect} from "react-redux"
import { bindActionCreators } from "C:/Users/EducaciónIT/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux";
import {borrarUsuario} from "../../api/actions"

class ListadoUsuarios extends Component{
    render(){
        let {usuarios,borrarUsuario} = this.props
        return(
            <ul>
                {usuarios.length 
                ?
                 usuarios.map((usuario,i) =>
                    <li key={i}>{usuario.nombre} {usuario.apellido}
                    <button>Editar</button> <button onClick={                        
                        //()=>{ borrarUsuario(i) }
                        borrarUsuario.bind(null,i)                        
                        }>Borrar</button>
                    </li>)
                :
                <li>No hay Usuarios</li>    
                }
            </ul>
        )
        
    }
}

let mapStateToProps = store  =>{
    return {
        usuarios:store.usuarios
    }
}
let mapDispatchToProps= dispatch => {
    return {
        borrarUsuario: bindActionCreators(borrarUsuario,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListadoUsuarios)

