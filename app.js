import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Login from './components/login_page'
export default class App extends Component {
    state = {};
  
    render() {
      return (
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/dashboard"
            render={props => (
              <BrowserRouter>
                <Dashboard {...props} />
              </BrowserRouter>
            )}
          />
          <Redirect from="/" to="/login" />
        </Switch>
      );
    }
  }
  
ReactDOM.render(<Login/>,document.getElementById("root"))