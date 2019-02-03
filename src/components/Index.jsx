import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom'
import Optimat from './Optimat.jsx'
import Result from './Result.jsx'

const Index = () => (
  <Switch>
    <Route path="/question/:id" component={Optimat} />
    <Route path="/question" component={Optimat} />
    <Route path="/result" component={Result} />
  </Switch>
)

export default Index