import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"
import rootReducer from "./reducers"

const initialState = {}
const middleware = []

const composeTools = composeWithDevTools({})

const composeEnhancers = composeTools(applyMiddleware(...middleware))

export default createStore(
    rootReducer,
    initialState,
    composeEnhancers
)