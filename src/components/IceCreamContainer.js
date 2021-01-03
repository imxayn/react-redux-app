import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from  '../redux'

function IceCreamContainer(props){
    return(
        <div>
            {console.log(props,'props')}
            <h4>Number of IceCreams - {props.numOfIceCreams} </h4>
            <button onClick={props.buyIceCream}>Buy Ice Creams</button>
        </div>
    )
}

//step 1
//mapStateToProps
// to access redux state into react component
const mapStateToProps = state => {
    console.log(state,'mapStateToProps')
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
//step 2
//mapDispatchToProps
// for dispatching action
//this function gets the dispatch method as a parameter and allows us to map action creators to props in our component
//in this example we mapped dispatching by cake to a prop called `buyCake` this allows us to call `buyCake` as a `props.buyCake`
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

//step1 and step2 are possible becoz of connect() function from react-redux
// connect() connects react component with redux store
//in our example it connects IceCreamContainer with redux store
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)