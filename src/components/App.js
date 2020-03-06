import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'//Clase 19

import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew.js'
import Badges from '../pages/Badges.js'
import NotFund from '../pages/NotFound.js'
import Home from '../pages/Home.js'

//Podemos crear componentes de esta manera cuando:
/*cuando no haya ningun otro metodo que hayamos declarado
o que no estemos usando estado (Clase react #19) */
function App(){
    return (
        <BrowserRouter>
            <Layout>            
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/Home" component={Home} />
                    <Route component={NotFund} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )

}

export default App