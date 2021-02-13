import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Header from '../pages/Header/Header'
import Pokedex from '../pages/Pokedex/Pokedex'
import Details from '../pages/Details/Details'
import Error from '../pages/Error/Error'



const Router = () => {

  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path={'/pokedex'}>
          <Pokedex />
        </Route>

        <Route exact path={'/details'}>
          <Details />
        </Route>

        <Route>
          <Error />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router