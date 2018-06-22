// @flow
import React, { Component } from 'react';
import { Grid } from '@material-ui/core/index';

import { Container } from './Signup.style';
import SignupForm from '../../components/SignupForm';

class Signup extends Component {
  render() {
    return (
      <Container>
        <Grid container justify="center">
          <Grid item>
            <SignupForm />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Signup;
