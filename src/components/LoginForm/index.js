import React from 'react';
import TextField from '@material-ui/core/TextField';
import queryString from 'query-string';

class Login extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  state = {
    domain: 'extranet',
    username: '',
    password: 'abc123'
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    }, () => {
      if (this.state.username === 'bonny') {
        fetch('https://sc910.sc/sitecore/api/ssc/auth/login?sc_apikey={5C7DE176-4615-4232-961F-6B8F4D899F55}', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          credentials: 'include',
          method: 'POST',
          body: queryString.stringify(this.state),
        }).then((response) => {
          console.log(response);
        });
      } 
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <p>LoginForm Component</p>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="username"
            label="User Name"
            className={classes.input}
            value={this.state.username}
            onChange={this.handleChange('username')} />
        </form>
        {this.state.username === 'bonny' &&
          <h2>You are logged in!</h2>
        }
      </div>
    );
  }
}

export default Login;


