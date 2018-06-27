// @flow
import { withFormik } from 'formik';
import Yup from 'yup';

import SignupForm from './SignupForm';

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address.')
      .required('Email is required!')
      .test(
        'already-used',
        'This email is already used!!',
        value =>
          new Promise(resolve =>
            setTimeout(() => {
              resolve(!['stanislasb@theodo.fr', 'jonathanb@theodo.fr'].includes(value));
            }, 3000),
          ),
      ),
    password: Yup.string()
      .min(8, 'Your password must contain a minimum of 8 characters')
      .required('Password is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'SignupForm', // helps with React DevTools
})(SignupForm);
