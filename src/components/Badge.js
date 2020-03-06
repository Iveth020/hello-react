import React from 'react'

import "./styles/Badge.css"
import Logo from "../images/badge-header.svg"
import Gravatar from "./Gravatar.js"

class Badge extends React.Component {
  
    render(){
       //const {avatarUrl} = this.props;
        return <div className="Badge">
            <div className="Badge__header"> 
                <img src={Logo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <Gravatar
                 className="Badge__avatar"
                 email={this.props.email}
                 alt="Avatar"
                />
                <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
              <h3>{this.props.ocupation}</h3>
              <div>@{this.props.twitter}</div>
            </div>

            <div className="Badge__footer">
                @platziconf
            </div>

        </div>
    }
}

export default Badge