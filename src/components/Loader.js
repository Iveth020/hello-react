import React from 'react'
import './styles/Loader.css'

 class Loader extends React.Component{
    recder(){
        return(
            <div className="lds-grid">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div> 

        )
    }
}

export default Loader