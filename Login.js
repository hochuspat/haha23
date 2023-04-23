import React, { Component } from 'react';
import HomePage from './Home';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isValid: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username === '1' && this.state.password === '1') {
      this.setState({ isValid: true });
    }
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.isValid) {
      return <HomePage />;
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="LoginForm" >
          <div className='img'></div>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder='Логин' />
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder='Пароль'/>
          <button type="submit" style={{ backgroundColor: 'green', color: 'white' }} >Отправить</button>
        </form>
      );
    }
  }
}


export default Login;