export let aumentarContador = () => ({type : "CONTADOR_AUMENTAR"})

export let disminuirContador = () => ({type : "CONTADOR_DISMINUIR"})

export let reiniciarContador = () => ({type : "CONTADOR_REINICIAR"})

export let mostrarFormulario = () => ({type : "FORMULARIO_MOSTRAR"})


export let borrarUsuario = i => ({
    type : "LISTADOUSUARIOS_BORRAR",
    i:i
})

export let editarUsuario = i => ({
    type : "LISTADOUSUARIOS_EDITAR",
    i:i

})
export let handleEdit = e => {
    e.preventDefault()
    return {type : "FORMULARIO_EDIT"}
}

export let handleSubmit = e => {
    e.preventDefault()
    return {type : "FORMULARIO_SUBMIT"}}
    

export let handleChange = e => ({
    type : "FORMULARIO_CHANGE",
    valor: e.target.value,
    id : e.target.id
})


export let pedirUsuarios = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (res => res.json())
    .then(res =>{
        dispatch( {type :"USUARIOS_PEDIR",usuarios:res})
    })
    .catch(err=>{
        dispatch( {type: "USUARIOS_ERROR"})
    })

}


