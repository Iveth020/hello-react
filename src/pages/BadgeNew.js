import React from "react"
import "../components/styles/BadgeNew.css"
import header from "../images/badge-header.svg"      
import Navbar from "../components/Navbar.js"
import Badge from "../components/Badge"
import myPicture from "../images/IMG_20200103_190931_371.jpg"
import BadgeForm from "../components/BadgeForm"

class BadgeNew extends React.Component{

    state = { form: {
        firstName: " ",
        lastName: " ",
        email: " ",
        ocupation: " ",
        twitter: " "
    } } // le ponemos una propiedad a state (form)

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero" >
                <img className="img-fluid"  src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            < Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            ocupation={this.state.form.ocupation}
                            twitter={this.state.form.twitter} 
                            avatarUrl={myPicture} 
                            />
                        </div>
                        <div className="col-6">
                            < BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew