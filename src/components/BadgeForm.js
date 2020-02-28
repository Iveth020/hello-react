import React from "react"

class BadgeForm extends React.Component{

    handleClick = e =>{
        console.log("Button was clicked")
    }
    handleSubmit = e =>{
        e.preventDefault()// para que no se envie el formulario
        console.log("Form was submitted")
        console.log(this.state)
    }

    render(){

     return(

     <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit} >
            <div className="form-group">
                <label >First Name</label>
                <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}></input>
            </div>
            <div className="form-group">
                <label >Last Name</label>
                <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}></input>
            </div>
            <div className="form-group">
                <label >email</label>
                <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}></input>
            </div>
            <div className="form-group">
                <label>ocupation</label>
                <input onChange={this.props.onChange} className="form-control" type="text" name="ocupation" value={this.props.formValues.ocupation}></input>
            </div>
            <div className="form-group">
                <label>twitter</label>
                <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}></input>
                </div>
            <button onClick={this.handleClick} className="btn btn-primary">save</button>
        </form>
    </div>
        )
    }
}
export default BadgeForm