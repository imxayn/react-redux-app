import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from './redux/store'
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Cakes</h2>
        <CakeContainer />
        <HooksCakeContainer />
        <h2>Ice Creams</h2>
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
