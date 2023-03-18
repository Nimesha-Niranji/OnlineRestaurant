import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'

function Pages() {
  return (
    <switch>
      <Route path="/" exact component={Products} />
      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route path="/register" exact component={isLogged ? NotFound : Register} />
      <Route path="/cart" exact component={Cart} />
      <Route path="*" exact component={NotFound} />
    </switch>
  )
}

export default Pages
