import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/LandingPage";
import Rooms from "./pages/Rooms";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/rooms" component={Rooms} />
    </BrowserRouter>
  );
};

export default Routes;
