
import {BUY_CAKE} from './cakeTypes'



//Actions the only way your app can interact with store
//carry some info from ur app to redux store
//plain js object
//have type proprty that idicates the type of action being performed
//the type property is typiclly definded as constants
// payload --> to send additional data to reducers

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}