
import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import Productreducer from "./products/productreducer"


// console.log(Productreducer)
const rootReducer = combineReducers({
    productdata:Productreducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)))
