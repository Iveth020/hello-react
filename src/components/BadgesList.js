import React from 'react'
import './styles/forList.css'

class BadgesList extends React.Component{
    render(){
        return (

            <ul  className="list-unstyled">
                {this.props.badges.map(badge=>{
                    return(
                        <li key={badge.id}>
                        <p>{badge.firstName} {badge.lastName}</p>
                        </li>
                    )
                })}
           </ul>

        )
    }
}

export default BadgesList