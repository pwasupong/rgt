import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SigninPage from './components/auth/signin-page';
import Signout from './components/auth/signout';
import PasswordResetPage from './components/auth/password-reset-page';
import Home from './components/home/home';
import Forum from './components/home/forum';
import RequireAuth from './components/auth/require-auth';
import App from './components/app';
import { AUTH_USER } from './actions/types';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we hasve a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}
const element = <Provider store={store}>
                  <MuiThemeProvider>
                    <Router history={browserHistory}>
                      <Route path="/password-reset" component={PasswordResetPage} />
                      <Route path="/signout" component={Signout} />
                      <Route path="/" component={SigninPage} />
                      <Route path="/" component={App}>
                        <Route path="/home" component={RequireAuth(Home)} />
                        <Route path="/forum" component={RequireAuth(Forum)} />
                      </Route>
                    </Router>
                  </MuiThemeProvider>
                </Provider>;

ReactDOM.render(
  element,
  document.querySelector('.rgt-container')
);
