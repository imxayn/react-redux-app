// creating store
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //redux-thunk allows us to define asynchronous action creators in our application
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store
