import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form123 from "./components/form";
import "./App.css";
import Header from "./components/header";
import Item from "./components/item";
import Company from "./components/company";

const App = () => {
  // const [items, setItems] = useState([]);
  // const [item, setItem] = useState({
  //   nature: "",
  //   Invoice: "",
  //   measurement: "",
  //   Particulars: "",
  //   freight: 0,
  // });

  return (
    <div className="App d-flex flex-column justify-content-center">
      <Header />
      <Router>
        <Switch>
          <Route path="/company" exact component={Company} />
          <Route path="/form" exact component={Form123} />
          <Route path="/items" exact component={Item} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
