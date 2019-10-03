import React, {Component} from 'react';
import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Reminder from './components/reminder';

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
    })
  }

  render(){

    fetch('http://localhost:3003/data')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let data = myJson
      return data;
    })
  return (
    <div className="App">
        {(this.state.signedUp)?<SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler}/>:<SignUp  emailHandler={this.emailHandler} usernameHandler={this.usernameHandler} signedUpHandler ={this.signUpHandler}/>}
        <h1>{this.state.email}</h1>
        <Reminder />
    </div>
  )};

}

export default App;

/*
<SignUp/>
<SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler}/>
     */