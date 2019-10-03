import React, {Component} from 'react';

import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

class App extends Component {


  state = {
    forgotUser: false,
    signedUp: false,
    email: '',
    username: ''
  }

  signUpHandler = () => {
    if (this.state.email != null && this.state.username != null) {
      this.setState({
        signedUp: true
      })
    } else {
      return 
    }
  }
  emailHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  usernameHandler = (event) => {
    this.setState({ username: event.target.value})
  }


  forgotHandler = () => {
    this.setState({
      forgotUser: true
    }
    )
  }

  render(){
  return (
    <div className="App">
        {(this.state.signedUp)?<SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler}/>:<SignUp  emailHandler={this.emailHandler} usernameHandler={this.usernameHandler} signedUpHandler ={this.signUpHandler}/>}
        <h1>{this.state.email}</h1>
    </div>
  )};
}

export default App;

/*
<SignUp/>
<SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler}/>
     */