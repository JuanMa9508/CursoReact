export let aumentarContador = () => ({type : "CONTADOR_AUMENTAR"})

export let disminuirContador = () => ({type : "CONTADOR_DISMINUIR"})

export let reiniciarContador = () => ({type : "CONTADOR_REINICIAR"})

export let mostrarFormulario = () => ({type : "FORMULARIO_MOSTRAR"})


export let borrarUsuario = i => ({
    type : "LISTADOUSUARIOS_BORRAR",
    i:i
})

export let handleSubmit = e => {
    e.preventDefault()
    return {type : "FORMULARIO_SUBMIT"}}
    

export let handleChange = e => ({
    type : "FORMULARIO_CHANGE",
    valor: e.target.value,
    id : e.target.id
})