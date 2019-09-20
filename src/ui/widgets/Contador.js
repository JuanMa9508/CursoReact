import React, { Component } from 'react'
import {connect} from "react-redux"
import {aumentarContador,disminuirContador,reiniciarContador} from "../../api/actions"
import {bindActionCreators} from "redux"
class Contador extends Component {
    render() {
        let {contador,aumentarContador,disminuirContador,reiniciarContador} = this.props
        return (
            <div>
                <p>Contador : {contador}</p>
                <button onClick={aumentarContador}>+</button>
                <button onClick={disminuirContador}>-</button>
                <button onClick={reiniciarContador}>reiniciar</button>
            </div>
        )
    }
}

let mapStateToProps = store  =>{
    return {
        contador: store.contador,
   
    }
}
let mapDispatchToProps= dispatch => {
    return {
        aumentarContador : bindActionCreators(aumentarContador,dispatch),
        disminuirContador : bindActionCreators(disminuirContador,dispatch),
        reiniciarContador : bindActionCreators(reiniciarContador,dispatch) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contador)
