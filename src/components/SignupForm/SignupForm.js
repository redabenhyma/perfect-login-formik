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
    return (
      <Container>
        <form onSubmit={this.props.handleSubmit}>
          <Card className="card-login">
            <CardMedia
              className="card-media-login"
              image="https://www.maddyness.com/wp-content/uploads/2018/03/theodo-logo-924x462.jpg"
              title="Theodo"
            />
            <CardContent>
              <TextField
                autoFocus
                fullWidth
                id="login"
                label="Login"
                value={this.props.values.login}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
              />
              <TextField
                fullWidth
                id="password"
                label="Password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.props.values.password}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
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
                disabled={this.props.isSubmitting}
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
