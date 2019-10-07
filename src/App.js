import React, {Component} from 'react';
import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Reminder from './components/reminder';
import DisplayReminders from './components/displayReminders';

class App extends Component {


  state = {
    forgotUser: false,
    signedUp: false,
    signedIn: false,
    userId: 0,
    email: '',
    username: '',
    signInUser: '',
    reminders: [],
    newReminder: ''
  }


 componentDidMount() {
  fetch('http://localhost:3003/data')
  .then(response => response.json())
  .then(data => {
    // let data = myJson
    console.log(data.data);
    })
  }


  signUpHandler = () => {
    if (this.state.email != null && this.state.username != null) {
      this.setState({
        signedUp: true
      })

      console.log(this.state.email);
      console.log(this.state.username);

      fetch(`http://localhost:3003/register?email=${this.state.email}.com&username=${this.state.username}`, {mode: "no-cors"})

    } else {
      return 
    }
  }

  signInHandler = async () => {
    let data = fetch(`http://localhost:3003/checkUser?username=${this.state.signInUser}`, {mode: "no-cors"});
    
    if(await data.data === this.state.signInUser) {
      this.setState({ signedIn: true });
      console.log(this.state.signedIn);
    } else {
      this.setState({ signedIn: false });
      console.log(this.state.signedIn)
    }
    console.log(data)
  }

  emailHandler = (event) => {
    this.setState({ email: event.target.value });
    console.log(event.target.value);
  }


  usernameHandler = (event) => {
    this.setState({ username: event.target.value})
  }
  signedInUserHandler = event => {
    event.preventDefault()
    this.setState({ signInUser: event.target.value })
  }

  userIdHandler = () => {
    console.log(this.state.username);
    // this.state.signedIn ? this.setState({ userId: 1 }) : ;
  }

  reminderHandler = (event) => {
    // let input = event.target.value;
    // this.state.reminders.push(input)
    this.setState({ newReminder: event.target.value});
    
   

    console.log(this.state.newReminder);
  }

  addReminder = () => {
    fetch(`http://localhost:3003/reminder?reminder=${this.state.newReminder}`, {mode: "no-cors"})
  }

  deleteHandler = () => {
    this.state.reminders.pop()
    this.setState({ reminders: this.state.reminders});
  }

  forgotHandler = () => {
    this.setState({
      forgotUser: true
    })
  }
  
  // key={this.state.reminder.indexOf(reminders)}



  render(){
    let reminderList = this.state.reminders

    const displayReminders = reminderList.map(x => <DisplayReminders reminders={x} deleteHandler={this.deleteHandler}/>)
  return (
    <div className="App">
        {(this.state.signedUp)?
        <SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler} signInHandler={this.signInHandler} signedInUserHandler={this.signedInUserHandler}/> :
        <SignUp  emailHandler={this.emailHandler} usernameHandler={this.usernameHandler} signedUpHandler ={this.signUpHandler}/>}
        

        {(this.state.signedIn)?<Reminder addReminder={this.addReminder} reminderHandler={this.reminderHandler}/> : null
        }

        
        {/* {displayReminders} */}
        
    </div>
  )};

}

export default App;

// componentDidMount(event) {
// fetch('http://localhost:3003/data', {
//     method: 'POST',
//     content: 'application/json',
//     body: JSON.stringify({
//       email: '',
//       username: '',
//     })
//   })
// }