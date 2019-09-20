import React,{Component} from "react"
import {connect} from "react-redux"
import ListadoUsuarios from "./ListadoUsuarios"
import {mostrarFormulario,handleSubmit,handleChange} from "../../api/actions"
import {bindActionCreators} from "redux"


class Formulario extends Component{
    render(){
        let{mostrarFormulario,formvisible,handleSubmit,handleChange,nombre,apellido,usuarios}=this.props
  
        return(
            <div>
                {formvisible
                ?
                    <form onSubmit={handleSubmit}>
                        <input value={nombre}  type="text" id="nombre" placeholder="Nombre" onChange={handleChange}/>
                        <input value={apellido} type="text" id="apellido" placeholder="Apellido" onChange={handleChange}/>
                        <button>Agregar!</button>
                    </form>
                :
                    null
                }
                <button onClick={mostrarFormulario}>{formvisible?"Ocultar":"Mostrar"}</button>
                <ListadoUsuarios />
            </div>
        )
    }

}

let mapStateToProps = store  =>{
    return {
       
        formvisible: store.formvisible,
        nombre:store.nombre,
        apellido: store.apellido,
        
    }
}

let mapDispatchToProps= dispatch => {
    return {
        mostrarFormulario : bindActionCreators(mostrarFormulario,dispatch),
        handleSubmit : bindActionCreators(handleSubmit,dispatch),
        handleChange : bindActionCreators(handleChange,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Formulario)


