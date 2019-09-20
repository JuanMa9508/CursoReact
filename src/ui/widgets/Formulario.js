import React,{Component} from "react"
import {connect} from "react-redux"
import ListadoUsuarios from "./ListadoUsuarios"
import {mostrarFormulario,handleSubmit,handleChange,handleEdit} from "../../api/actions"
import {bindActionCreators} from "redux"


class Formulario extends Component{
    render(){
        let{mostrarFormulario,formvisible,handleSubmit,handleEdit,handleChange,nombre,apellido,editable}=this.props
  
        return(
            <div>
                {formvisible
                ?
                    <form onSubmit={editable>-1?handleEdit:handleSubmit}>
                        <input value={nombre}  type="text" id="nombre" placeholder="Nombre" onChange={handleChange}/>
                        <input value={apellido} type="text" id="apellido" placeholder="Apellido" onChange={handleChange}/>
                        <button>{editable>-1?"Editar!":"Agregar!"}</button>
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
        editable : store.editable
        
    }
}

let mapDispatchToProps= dispatch => {
    return {
        mostrarFormulario : bindActionCreators(mostrarFormulario,dispatch),
        handleSubmit : bindActionCreators(handleSubmit,dispatch),
        handleChange : bindActionCreators(handleChange,dispatch),
        handleEdit : bindActionCreators(handleEdit,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Formulario)


