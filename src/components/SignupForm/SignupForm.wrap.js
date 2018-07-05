// @flow
import { withFormik } from 'formik';
import Yup from 'yup';

import SignupForm from './SignupForm';

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address.')
      .required('Email is required!'),
    password: Yup.string()
      .min(8, 'Your password must contain a minimum of 8 characters')
      .required('Password is required!'),
  }),
  handleSubmit: (values, { setSubmitting, setFieldError }) => {
    // Backend Request
    setTimeout(() => {
      if (['stanislasb@theodo.fr', 'jonathanb@theodo.fr'].includes(values.email))
        setFieldError('email', 'This email is already used!');
      else alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 3000);
  },
  displayName: 'SignupForm', // helps with React DevTools
})(SignupForm);
