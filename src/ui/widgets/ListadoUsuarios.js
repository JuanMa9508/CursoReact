import React,{Component} from "react"
import {connect} from "react-redux"

class ListadoUsuarios extends Component{
    render(){
        let {usuarios} = this.props
        return(
            <ul>
                {usuarios.length 
                ?
                 usuarios.map((usuario,i) =>
                    <li key={i}>{usuario.nombre} {usuario.apellido}</li>)
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
export default connect(mapStateToProps,null)(ListadoUsuarios)

