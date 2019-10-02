import React, {Component} from 'react';

import './App.css';
import SignIn from './components/signIn';

class App extends Component {


  state = {
    forgotUser: false
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
        <SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler}/>
    </div>
  )};
}

export default App;
