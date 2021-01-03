import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
    numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action ) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams: state.numOfIceCreams >1 ? state.numOfIceCreams -2 : 'IceCreams Finished'
        }
        default:  return state
    }
} 

export default iceCreamReducer
