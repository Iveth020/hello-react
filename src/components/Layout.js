import React from 'react'

import Navbar from './Navbar.js'
//con el props children, el componente Layout si esta devolviendo lo que tiene dentro de su etiqueta 
function Layout(props){
    
    return (
        <React.Fragment>
            <Navbar/>
            {props.children} 
        </React.Fragment>
        
        ) 

}

export default Layout