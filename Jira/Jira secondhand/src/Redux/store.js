import {legacy_createStore, applyMiddleware, combineReducers,composeEnhancers,compose}from"redux";
import thunk from "redux-thunk";
import {reducer as AppReducer} from "./AppReducer/reducer"
import {reducer as AuthReducer} from "./AuthReducer/reducer"
const rootReducer = combineReducers(AppReducer,AuthReducer)


const composeEnhancers= 
    typeof window==="object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    })
    :compose;
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
