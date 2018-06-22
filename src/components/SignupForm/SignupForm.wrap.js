// @flow
import { connect } from 'react-redux';

import SignupForm from './SignupForm';

const mapStateToProps = (state: Store): SignupFormStore => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    editThisFunction() {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
