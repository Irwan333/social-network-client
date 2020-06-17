import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Profile from "./user/Profile";
import Users from "./user/User";

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/user/:userId" component={Profile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
