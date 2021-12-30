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
      <Router>
        <Sidebar
          width="200"
          background="rgb(21, 85, 89)"
          breakPoint="768"
          content={[
            <SidebarItem hoverHighlight="rgb(237, 90, 124)">
              {/* <Link style={{ textDecoration: "none" }} to="/">
                <p className="h4 text-info">Home</p>
              </Link> */}
              12
            </SidebarItem>,
            <SidebarItem hoverHighlight="rgb(89, 164, 222)">
              {/* <Link to="/company">
                <p className="h4 text-info">Add Company</p>
              </Link> */}
              12
            </SidebarItem>,
            <SidebarItem hoverHighlight="red">
              {/* <Link to="/form">
                <p className="h4 text-info"> Form </p>
              </Link> */}
              12
            </SidebarItem>,
            <SidebarItem hoverHighlight="rgb(214, 175, 66)">
              {/* <Link to="/displaydate">
                <p className="h4 text-info">Display by date</p>
              </Link> */}
              12
            </SidebarItem>,
            <SidebarItem hoverHighlight="rgb(214, 175, 66)">
              <Link to="/displaycom">
                <p className="h4 text-info">Display by Company</p>
              </Link>
            </SidebarItem>,
          ]}
        ></Sidebar>
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
      </Router>
    </div>
  );
};

export default App;
