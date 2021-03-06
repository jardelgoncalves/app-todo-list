import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'
import LoginPage from './pages/login'
import CadastroPage from './pages/cadastro'
import UsuarioPage from './pages/user'
import NotFound from './pages/not-found'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route path='/cadastro' component={CadastroPage} />
      <PrivateRoute path='/app' component={UsuarioPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes