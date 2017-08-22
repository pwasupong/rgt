import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    console.log('dd');
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', res.data.token);
        // - redirect to the route '/home'
        browserHistory.push('/home');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Incorrect email or password.'));
      });
  }


}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  browserHistory.push('/');
  return { type: UNAUTH_USER }
}

export function checkToken() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
          dispatch({
            type: FETCH_MESSAGE,
            payload: res.data.message
          });
      })
  }
}
