import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Login from "./login/Login";
import Pdp from "./pdp/Pdp"

const index = () => {
  return (
    <>
        <Route exact path="/">
            <Home />
        </Route>
        
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/:id">
          <Pdp/>
        </Route>

    </>
  )
}

export default index