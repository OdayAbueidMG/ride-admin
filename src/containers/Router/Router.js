import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Login from "../Auth/Auth"
import Aux from "../../hoc/Aux"
import Drivers from "../Drivers/drivers"


 class Router extends Component {
    render() {
        return (
            <Aux>
                <Route path="/home" component={Login} />
                <Route path="/drivers" component={Drivers} />
            </Aux>
        
                  
        )
    }
}

export default Router
