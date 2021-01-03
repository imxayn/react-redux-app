
import {BUY_CAKE} from './cakeTypes'



//Actions the only way your app can interact with store
//carry some info from ur app to redux store
//plain js object
//have type proprty that idicates the type of action being performed
//the type property is typiclly definded as constantc
export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}