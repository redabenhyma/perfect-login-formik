// @flow
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
} from '@material-ui/core/index';
import { Visibility, VisibilityOff } from '@material-ui/icons/index';

import { Container } from './SignupForm.style';

type Props = {};

class SignupForm extends Component<Props> {
  state = {
    showPassword: false,
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const { values, touched, errors, handleChange, handleBlur, isSubmitting } = this.props;

    return (
      <Container>
        <form onSubmit={this.props.handleSubmit}>
          <Card className="card-signup">
            <CardMedia
              className="card-media-signup"
              image="https://www.maddyness.com/wp-content/uploads/2018/03/theodo-logo-924x462.jpg"
              title="Theodo"
            />
            <CardContent>
              <TextField
                autoFocus
                fullWidth
                className="text-field-signup"
                id="email"
                label="Email"
                value={values.email}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth
                className="text-field-signup"
                id="password"
                label="Password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={values.password}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                disabled={isSubmitting}
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </CardActions>
          </Card>
        </form>
      </Container>
    );
  }
}

export default SignupForm;
