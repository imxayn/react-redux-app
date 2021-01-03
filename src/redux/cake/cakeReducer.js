
//Reducer (prevState,action) => newState
//specify how the app's state changes in response to actions sent to the store
//Function that accepts state and action as arguments, and return the next state of the application
import {BUY_CAKE} from './cakeTypes'

const initialState={
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action ) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes>1 ? state.numOfCakes-1 : 'Cakes Finished'
        }
        default:  return state
    }
} 

export default cakeReducer;