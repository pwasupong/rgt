import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import PasswordResetForm from './password-reset-form';
import Logo from '../global/logo';

class PasswordResetPage extends Component {
  constructor(props) {
    super(props);
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
              <h5>RESET PASSWORD</h5>
              <PasswordResetForm />
            </Paper>
        </div>
      </div>
    );
  }
}

export default PasswordResetPage;
