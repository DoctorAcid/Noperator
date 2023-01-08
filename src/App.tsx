import React from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard";
import Strategies from "./pages/Strategies";
import Technicals from "./pages/Technicals";
import Scanner from "./pages/Scanners";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/strategies" component={Strategies} />
          <Route exact path="/technicals" component={Technicals} />
          <Route exact path="/scanners" component={Scanner} />
        </Switch>
      </BrowserRouter>
      {/*API key : H6E8PTSYZS6W9R8G*/}
    </div>
  );
}

export default App;
