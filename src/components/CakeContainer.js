import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from  '../redux'

function CakeContainer(props){
    return(
        <div>
            {console.log(props)}
            <h4>Number of cakes - {props.numOfCakes} </h4>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//step 1
//mapStateToProps
// to access redux state into react component
const mapStateToProps = state => {
    console.log(state,'mapStateToProps')
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
//step 2
//mapDispatchToProps
// for dispatching action
//this function gets the dispatch method as a parameter and allows us to map action creators to props in our component
//in this example we mapped dispatching by cake to a prop called `buyCake` this allows us to call `buyCake` as a `props.buyCake`
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//step1 and step2 are possible becoz of connect() function from react-redux
// connect() connects react component with redux store
//in our example it connects cakeContainer with redux store
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)