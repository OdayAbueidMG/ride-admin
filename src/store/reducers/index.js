import {combineReducers} from "redux";
// importing reducers 
import auth from "./Auth"



// combining the reducers
const rootReducer = combineReducers({
    auth
});


export default rootReducer
