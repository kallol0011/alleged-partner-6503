import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import {reducer as authReducer} from "./AuthReducer/reducer"
import {reducer as proReducer} from "./ProductReducer/reducer"
import {reducer as cartReducer} from "./CartReducer/reducer"
const rootReducer=combineReducers({
    authReducer,
    proReducer,
    cartReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))