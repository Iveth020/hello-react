import React from 'react'
import "./styles/Badge.css"

class Badge extends React.Component {
  
    render(){
       const {avatarUrl, Logo} = this.props;
        return <div className="Badge">
            <div className="Badge__header"> 
                <img src={Logo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
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