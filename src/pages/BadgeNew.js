import React from "react"
import "../components/styles/BadgeNew.css"
import header from "../images/platziconf-logo.svg"      
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import myPicture from "../images/IMG_20200103_190931_371.jpg"


class BadgeNew extends React.Component{

    state = { 
        loading: false,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            ocupation: "",
            twitter: ""
    }   }

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({loading: true, error: null})
        
        /*try{ // para crear un elemento nuevo en el componente BadgeList
            
            this.setState({ loading:false })
        }catch(error){
            this.setState({ loading:false, error: error })
        }*/
        
    }
    
    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero" >
                <img className="BadgeNew__hero-image img-fluid"  src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            < Badge 
                            firstName={this.state.form.firstName || 'First_Name'} 
                            lastName={this.state.form.lastName || 'Last_Name'}
                            email={this.state.form.email || 'Email'}
                            ocupation={this.state.form.ocupation || 'Ocupation'}
                            twitter={this.state.form.twitter || 'Twitter'} 
                            avatarUrl={myPicture} 
                            />
                        </div>
                        <div className="col-6">
                            < BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form} 
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>//con esta etiqueta, sustituimos la etiqueta <div>
        )
    }
}
export default BadgeNew