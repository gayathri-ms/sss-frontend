import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form123 from "./components/form";
import "./App.css";
import Header from "./components/header";
import Item from "./components/item";
import Company from "./components/company";
import Displaydate from "./components/display";
import Displaycomp from "./components/dis_com";
import Duedate from "./components/duedate";
import Home from "./components/home";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";

const App = () => {
  // const [items, setItems] = useState([]);
  // const [item, setItem] = useState({
  //   nature: "",
  //   Invoice: "",
  //   measurement: "",
  //   Particulars: "",
  //   freight: 0,
  // });
  const [inv, setInv] = useState(0);
  return (
    <div className="App d-flex flex-column justify-content-center">
      <Header />

      {/* <Displaydate /> */}
      {/* <Displaycomp /> */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/company" exact component={Company} />
        <Route path="/form" exact>
          <Form123 inv={inv} setInv={setInv} />
        </Route>
        <Route path="/items" exact>
          <Item inv={inv} setInv={setInv} />
        </Route>
        <Route path="/displaydate" exact>
          <Displaydate inv={inv} setInv={setInv} />
        </Route>
        <Route path="/displaycom" exact>
          <Displaycomp inv={inv} setInv={setInv} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
