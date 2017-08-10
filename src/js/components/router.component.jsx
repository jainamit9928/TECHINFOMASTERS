import React from 'react'
import { Route , Switch} from 'react-router-dom'
import Home from './home.component'
import Search from './search.component'
import TechieDetails from './details.component'
const RouterComponent = () =>(
    <div>
         <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  path="/search/:id" component ={Search} />
        <Route path="/details/:id" component={TechieDetails} />
        </Switch>
</div>
 
)
export default RouterComponent