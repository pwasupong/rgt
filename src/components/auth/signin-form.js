import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderTextField, isRequired, isEmail } from '../global/form'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { signinUser } from '../../actions/auth';


class SigninForm extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const sForgotButton = {
      margin: 12
    };

    const sLabelForgotButton = {
      textTransform: 'none'
    };

    const { handleSubmit } = this.props;

    return (
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <div>
              <div>
                <Field name="email" component={renderTextField} label="Email" />
              </div>
              <div>
                <Field name="password" type="password" component={renderTextField} label="Password" />
              </div>
            </div>
            {this.renderAlert()}
            <FlatButton label="Forgot password?" primary={true} style={sForgotButton} labelStyle={sLabelForgotButton} href="/password-reset" />
            <RaisedButton type="submit" label="Sign in" primary={true} fullWidth={true}  />
          </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  isRequired(values, errors, [ 'email', 'password' ]);
  isEmail(values, errors, [ 'email' ]);
  return errors;
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

SigninForm = reduxForm({
  form: 'SigninForm',
  fields: ['email', 'password'],
  validate
})(SigninForm)

SigninForm = connect(
  mapStateToProps,
  { signinUser }
)(SigninForm)

export default SigninForm;
