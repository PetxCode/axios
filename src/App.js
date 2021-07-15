import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "./DetailPage";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail/:id" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
