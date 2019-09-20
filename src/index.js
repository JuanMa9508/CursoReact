//CommonJS 
//const React = require("react")
//ES6
import React from "react"
import ReactDOM from "react-dom"
import App from "./ui/layout/App"
import {Provider} from "react-redux"
import store from "./api/store"
//Conectar un componente con el DOM
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)