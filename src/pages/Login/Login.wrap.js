// @flow
import { connect } from 'react-redux';

import Login from './Login';

const mapStateToProps = (state: Store): LoginStore => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    editThisFunction() {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
