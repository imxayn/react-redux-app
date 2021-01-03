import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HooksIceCreamContainer() {
  //in hooks we there is useSelector and useDispatch hooks instead of mapStateToProps & mapDispatchToProps
  // we don't need to use connect method from react-redux to connect redux store state with react component if using hooks
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Num Of IceCreams - {numOfIceCream}</h4>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
