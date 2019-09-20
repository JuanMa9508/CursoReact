import React , {Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Contador from "../widgets/Contador"
import Formulario from "../widgets/Formulario"


class App extends Component {

    constructor(){
        super()
        this.state = {  
            usuarios: []

        }        
       
       
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

  
 
    handleSubmit(e){
        e.preventDefault()
        //1) selectores
        //let nombre = document.querySelector("input").value

        //2) Prop "ref"

        //3)
           // let nombre  = e.target[0].value
           // console.dir(nombre)

        //4)Controlar el cambio del input y a cada cambio de valor, guardarlo en el state de un padre.
        //  Usar este valor para retroalimentar el mismo input
        /*Forma vieja
        let usuario = 
        {
            nombre : this.state.nombre,
            apellido: this.state.apellido
        }
        let aux = this.state.usuarios.slice(0)
        aux.push(usuario)          
        this.setState({usuarios : aux})
        this.setState({nombre : ""})
        this.setState({apellido:""})
        */

        this.setState({
            usuarios : [
                ...this.state.usuarios,
                {
                    nombre:this.state.nombre,
                    apellido:this.state.apellido
                }
            ],
            nombre:"",
            apellido:""
        })



        
        
    }

    handleChange(e){

        /* Version -2015
        let id = e.target.id
        let value = e.target.value
        let campo = {}
        campo[id] = value
        //console.log(`${id} : ${value}`)
        console.log(campo)
        */
       ///Version 2015+
        this.setState({[e.target.id]:e.target.value  }  )
    }

    render(){       
        return (
            <>
            <Header/>
            <Main/>                    
            <Formulario/>                       
            <Contador/>
            <Footer/>
            </>     
        ) 
    }
}

export default App

