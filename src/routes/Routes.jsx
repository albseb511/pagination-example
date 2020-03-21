/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/newline-after-import */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

// eslint-disable-next-line no-unused-vars
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </>
  );
};

export default Routes;
