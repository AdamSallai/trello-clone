import React from "react";
import { Route } from "react-router-dom";
import Login from "./form/Login";
import Navbar from "./Navbar";
import Registration from "./form/Registration";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/main/login" component={Login} />
      <Route exact path="/main/registration" component={Registration} />
    </div>
  );
};

export default MainPage;
