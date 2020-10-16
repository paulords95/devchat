import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GeralRoom from "../../components/GeralRoom";
import FrontEndRoom from "../../components/FrontEndRoom";
import BackEndRoom from "../../components/BackEndRoom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/rooms/geral" exact component={GeralRoom} />
      <Route path="/rooms/front-end" exact component={FrontEndRoom} />
      <Route path="/rooms/back-end" exact component={BackEndRoom} />
    </BrowserRouter>
  );
};

export default Routes;
