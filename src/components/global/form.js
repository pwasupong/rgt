import React from 'react';
import TextField from 'material-ui/TextField';

export function renderTextField({
  input,
  label,
  meta: { touched, error },
  ...custom
}) {
  return (
    <TextField
      floatingLabelText={label}
      errorText={touched && error}
      fullWidth={true}
      {...input}
      {...custom}
    />
  );
}

export const isRequired = (values, errors, requiredFields) => {
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'This field is required.'
    }
  });
}

export const isEmail = (values, errors, requiredFields) => {
  requiredFields.forEach(field => {
    if (values[ field ] && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[ field ])) {
      errors[ field ] = 'Invalid email address.';
    }
  });
}
