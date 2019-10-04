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
    email: '',
    username: '',
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
  emailHandler = (event) => {
    this.setState({ email: event.target.value })
    console.log(event.target.value)
  }


  usernameHandler = (event) => {
    this.setState({ username: event.target.value})
  }

  reminderHandler = (event) => {
    // let input = event.target.value;
    // this.state.reminders.push(input)
    this.setState({ newReminder: event.target.value});
    
   

    console.log(this.state.newReminder);
  }

  runReminderHandler = () => {
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
        <SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler}/> :
        <SignUp  emailHandler={this.emailHandler} usernameHandler={this.usernameHandler} signedUpHandler ={this.signUpHandler}/>}
        <Reminder runReminderHandler={this.runReminderHandler} reminderHandler={this.reminderHandler}/>
        {displayReminders}
    </div>
  )};

}

export default App;

/*
<SignUp/>
<SignIn forgotUser={this.state.forgotUser} forgotHandler={this.forgotHandler}/>
     */