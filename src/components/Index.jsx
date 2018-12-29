import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom'
import Optimat from './Optimat.jsx'

const Index = () => (
  <Switch>
    <Route path="/question/:id" component={Optimat} />
    <Route path="/question" component={Optimat} />
  </Switch>
)

export default Index