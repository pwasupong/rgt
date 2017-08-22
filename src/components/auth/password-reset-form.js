import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField, isRequired, isEmail } from '../global/form'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class PasswordResetForm extends Component {
  handleFormSubmit({ email }) {
    console.log(email);
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
            </div>
            <RaisedButton type="submit" label="RESET PASSWORD" primary={true} fullWidth={true}  />
          </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  isRequired(values, errors, [ 'email' ]);
  isEmail(values, errors, [ 'email' ]);
  return errors;
};

export default reduxForm({
  form: 'PasswordResetForm',
  fields: ['email'],
  validate
})(PasswordResetForm)
