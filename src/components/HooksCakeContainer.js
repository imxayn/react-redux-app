import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  //in hooks we there is useSelector and useDispatch hooks instead of mapStateToProps & mapDispatchToProps
  // we don't need to use connect method from react-redux to connect redux store state with react component if using hooks
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Num Of Cakes - {numOfCakes}</h4>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
