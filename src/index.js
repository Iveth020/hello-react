//container.appendChild(element)// para añadir el elemento a el container

//tenemos que importar herramientas:
import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"

import "./global.css"
import App from './components/App.js'

const container = document.getElementById('app')
// en vez de appendchild, vamos a usar el metodo render
// el metodo render necesita 2 parametros, 1ero: que va a renderizar, 2do: donde lo va a renderizar 
ReactDOM.render(< App />,container)
