import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from  '../redux'

function NewCakeContainer(props){
    const [number,setNumber] = useState(1)

    return(
        <div>
            <h4>Number of cakes - {props.numOfCakes} </h4>
            <input type="text" value={number} onChange={e=> setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

//step 1
//mapStateToProps
// to access redux state into react component
const mapStateToProps = state => {
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
        buyCake: number => dispatch(buyCake(number))
    }
}

//step1 and step2 are possible becoz of connect() function from react-redux
// connect() connects react component with redux store
//in our example it connects NewCakeContainer with redux store
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)