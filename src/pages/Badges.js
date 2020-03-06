import React from 'react'
import { Link } from 'react-router-dom'//Clase 19

import './styles/Badges.css'
import confLogo from '../images/platziconf-logo.svg'
import BadgesList from '../components/BadgesList.js'
import PageLoading from '../components/PageLoading.js'

class Badges extends React.Component{ 
   state = {
        loading: true,
        error:null,
        data: [],
   }
    
    componentDidMount(){
        this.timeoutId = setTimeout(()=>{ // le podemos un id al setTimeout para que en caso de que no se pueda ejecutar llamamos 
        //la funcion que esta es omponentWillUnmount y se limpia la memoria * clearTimeout(this.timeoutId) *

        this.setState({
            data: [
              {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                firstName: 'Freda',
                lastName: 'Grady',
                email: 'Leann_Berge@gmail.com',
                ocupation: 'Legacy Brand Director',
                twitter: 'FredaGrady22221-7573',
                avatarUrl:
                  'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
              },
              {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                firstName: 'Major',
                lastName: 'Rodriguez',
                email: 'Ilene66@hotmail.com',
                ocupation: 'Human Research Architect',
                twitter: 'MajorRodriguez61545',
                avatarUrl:
                  'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
              },
              {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                firstName: 'Daphney',
                lastName: 'Torphy',
                email: 'Ron61@hotmail.com',
                ocupation: 'National Markets Officer',
                twitter: 'DaphneyTorphy96105',
                avatarUrl:
                  'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
              },]
        })
        this.setState({ loading:false, error:null })
        },3000)
        

    }
    
    componentWillUnmount(){
        clearTimeout(this.timeoutId)//funcion setTimeout para limpiar memoria en caso de que no pueda ocurrir el setTimeout
    } 

   /* componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        this.setState({ loading:true, error:null })

        try { // para traer los datos con una llamada asincrona 
            const  data = []
            this.setState({ loading: false, data: data })
        }catch(error){
            this.setState({ loading: false, error: error })
        }
    } */

    render(){
        if(this.state.loading){
            return <PageLoading /> 
        }

        return (

            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="conf Logo"/>
                        </div>
                    </div>
                </div>
            
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </React.Fragment>    
        )
    }

}

export default Badges