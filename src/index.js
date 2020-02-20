
//container.appendChild(element)// para añadir el elemento a el container


//tenemos que importar herramientas:
import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"



import "./global.css"
import Badge from './components/Badge'


const container = document.getElementById('app');

// en vez de appendchild, vamos a usar el metodo render
// el metodo render necesita 2 parametros, 1ero: que va a renderizar, 2do: donde lo va a renderizar 
ReactDOM.render(<Badge
    firstName = "Iveth"
    lastName = "Hernandez"
    //avatarUrl = "https://images.app.goo.gl/V5tc75WtoVHRANwYA"
    ocupation = "Estudent Informatics Engineering"
    twitter = "Ivethernandez_a"
    />,container)
