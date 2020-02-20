
//container.appendChild(element)// para añadir el elemento a el container


//tenemos que importar herramientas:
import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';

//const element = <h1>Hello</h1>;
const container = document.getElementById('app'); 

// en vez de appendchild, vamos a usar el metodo render
// el metodo render necesita 2 parametros, 1ero: que va a renderizar, 2do: donde lo va a renderizar 
ReactDOM.render(<Badge />,container)
