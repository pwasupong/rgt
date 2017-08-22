import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SigninForm from './signin-form';
import Logo from '../global/logo';
import { browserHistory } from 'react-router';

class SigninPage extends Component {

  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    if (token) {
      browserHistory.push('/home');
    }
  }

  render() {
    const sDiv = {
      maxWidth: 400,
      margin: 'auto'
    };

    const sPage = {
      paddingTop: 50,
      textAlign: 'center',
    };

    const sLogo = {
      margin: 20
    };

    const sPaper = {
      width: '100%',
      margin: 'auto',
      display: 'inline-block',
      padding: 30
    };

    return (
      <div style={sPage}>
        <div style={sLogo}>
          <Logo />
        </div>
        <div style={sDiv}>
            <Paper style={sPaper} zDepth={1}>
              <h5>SIGN IN</h5>
              <SigninForm />
            </Paper>
        </div>
      </div>
    );
  }
}


export default SigninPage;
