// @flow
import { withFormik } from 'formik';

import SignupForm from './SignupForm';

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'SignupForm', // helps with React DevTools
})(SignupForm);
