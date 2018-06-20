// @flow
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputAdornment,
} from '@material-ui/core/index';
import { Visibility, VisibilityOff } from '@material-ui/icons/index';

import { Container } from './Signup.style';

class Signup extends Component {
  state = {
    login: '',
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
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
        <Grid container justify="center">
          <Grid item>
            <form>
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
                    value={this.state.login}
                    onChange={this.handleChange('login')}
                  />
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
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
                  <Button fullWidth variant="contained" color="primary">
                    Sign Up
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Signup;
