import React, { Component ,Suspense} from 'react';
import { Route} from "react-router-dom";
import Login from "../Auth/Auth"
import Aux from "../../hoc/Aux"
import LinearProgress from '@material-ui/core/LinearProgress';
const Drivers = React.lazy(() => import('../Drivers/drivers'));

 class Router extends Component {
    render() {
        return (
        
                <Suspense fallback={<LinearProgress/>}>
                <Route path="/home" component={Login} />
                <Route path="/drivers" component={Drivers} />
                </Suspense>
        
        
                  
        )
    }
}

export default Router
