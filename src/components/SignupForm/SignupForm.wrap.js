// @flow
import { withFormik } from 'formik';

import SignupForm from './SignupForm';

export default withFormik({
  mapPropsToValues: () => ({ login: '', password: '' }),
})(SignupForm);
