import * as React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {FactureNonPayee} from "./component/FactureNonPayee";
import {PayForm} from "./component/PayForm";


function App() {
  return (
    <div className="App">
      <FactureNonPayee/>
    </div>
  );
}

export default App;
