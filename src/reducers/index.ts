import { combineReducers } from "redux";
import securityReducer from "./securityReducers";
import authenticationReducer from "./authentificationReducers";
import registerReducer from "./registerReducers";
import globalReducer from "./globalReducers";


const rootReducer = combineReducers({
    security: securityReducer,
    authentification: authenticationReducer,
    register: registerReducer,
    global: globalReducer,

});

export default rootReducer;
