// @flow
import { connect } from 'react-redux';

import Signup from './Signup';

const mapStateToProps = (state: Store): SignupStore => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    editThisFunction() {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
