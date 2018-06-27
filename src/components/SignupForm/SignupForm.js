// @flow
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';

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
