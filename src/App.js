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
import Payment from "./components/payment";
import Pay_com from "./components/pay_com";
import Updatebalance from "./components/updatebalance";
import Dis_inv from "./components/dis_inv";
import Print from "./components/print";
import Signin from "./components/signin";
import { isAuthenticated } from "./helper/auth";
import Signup from "./components/signup";

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
      {isAuthenticated() ? <Header /> : ""}

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
        <Route path="/balance" exact>
          <Pay_com inv={inv} setInv={setInv} />
        </Route>
        <Route path="/payment" exact>
          <Payment inv={inv} setInv={setInv} />
        </Route>
        <Route path="/balanceupdate" exact>
          <Updatebalance inv={inv} setInv={setInv} />
        </Route>
        <Route path="/displayinv" exact>
          <Dis_inv />
        </Route>
        <Route path="/print" exact>
          <Print />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
