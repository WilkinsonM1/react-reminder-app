import React, { Component } from "react";
import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Reminder from "./components/reminder";
import DisplayReminders from "./components/displayReminders";

class App extends Component {
  state = {
    forgotUser: false,
    
    
    persons_id: 0,
    email: "",
    username: "",
    signInUser: "",
    reminders: [],
    newReminder: "",
    
    status: 'not-registered'
  };

  // use async await to handle your fetches better FOR EXAMPLE
  async componentDidMount() {
    // fetch('/data')
    // .then(response => response.json())
    // .then(data => {
    //   // let data = myJson
    //   console.log(data.data);
    //   })
    let response = await fetch("/data");
    let data = await response.json();
    console.log(data);
  }

  signUpHandler = () => {
    if (this.state.email != null && this.state.username != null) {
      this.setState({
        // signedUp: true
        status: 'signed-up'
      });

      console.log(this.state.email);
      console.log(this.state.username);

      fetch(
        `remotemysql.com/register?email=${this.state.email}.com&username=${this.state.username}`,
        { mode: "no-cors" }
      );
    } else {
      return;
    }
  };

  signInHandler = async () => {
    let data = await fetch(
      `/checkUser?username=${this.state.signInUser}`,
      { mode: "no-cors" }
    );

   await fetch (
      `/checkUserId?username=${this.state.signInUser}`
    )
      .then(response => response.json())
      .then((data) => {
        this.setState({
          persons_id: data.data
        })
        console.log(data.data)
        console.log(this.state.persons_id)
      });


    await fetch (
      `/reminder-list?persons_id=${this.state.persons_id}`
    )
     .then(response => response.json())
     .then((data) => {
       const reminderArr = data.data.map(reminders => reminders.reminder)
        this.setState({
          reminders: reminderArr
        })
        console.log(data)

     });

    // console.log(data)

    
    // .then( (result)=> {
    //     console.log(result)
    // })
    

    if (data) {
      this.setState({ 
        // signedIn: true, 
        // signedUp: true,
        status: 'signed-in'
      });
      
    } else {
      this.setState({ signedIn: false });
      alert("incorrect username entered")
   
    }
    
   
 
  };

  emailHandler = event => {
    this.setState({ email: event.target.value });
    console.log(event.target.value);
  };

  usernameHandler = event => {
    this.setState({ username: event.target.value });
  };
  signedInUserHandler = event => {
    event.preventDefault();
    this.setState({ signInUser: event.target.value });
  };

  userIdHandler = () => {
    console.log(this.state.username);
    // this.state.signedIn ? this.setState({ userId: 1 }) : ;
  };

  reminderHandler = event => {
    // let input = event.target.value;
    // this.state.reminders.push(input)
    this.setState({ newReminder: event.target.value });

    console.log(this.state.newReminder);
  };

  addReminder = async () => {
     fetch(`/reminder?reminder=${this.state.newReminder}&persons_id=${this.state.persons_id}`, {
      mode: "no-cors"
    });

    await fetch (
      `/reminder-list?persons_id=${this.state.persons_id}`
    )
     .then(response => response.json())
     .then((data) => {
       const reminderArr = data.data.map(reminders => reminders.reminder)
        this.setState({
          reminders: reminderArr
        })})

    
  };

  deleteHandler = () => {
    this.state.reminders.pop();
    this.setState({ reminders: this.state.reminders });
  };

  forgotHandler = () => {
    this.setState({
      forgotUser: true
    });
  };

  registerHandler = () => {
    this.setState({
      status: 'registering'
    });

  };



  show = () => {
    
    if(this.state.status == 'signed-up' || this.state.status == 'not-registered'){
      return(
      <SignIn
        forgotUser={this.state.forgotUser}
        forgotHandler={this.forgotHandler}
        signInHandler={this.signInHandler}
        signedInUserHandler={this.signedInUserHandler}
        registerHandler={this.registerHandler}
        />)
    }
    else if(this.state.status == 'registering'){
     return( <SignUp
        emailHandler={this.emailHandler}
        usernameHandler={this.usernameHandler}
        signedUpHandler={this.signUpHandler}
        />)
    }
    else if(this.state.status == 'signed-in'){
      return(<Reminder
            addReminder={this.addReminder}
            reminderHandler={this.reminderHandler}
            signInUser={this.state.signInUser}
          />
          )
    }

  }

  // key={this.state.reminder.indexOf(reminders)}

  render() {
    let reminderList = this.state.reminders;

    const displayReminders = reminderList.map(x => (
      <DisplayReminders reminders={x} deleteHandler={this.deleteHandler} />
    ));
    return (
      <div className="App">
         <h1>Reminder App!</h1>
         

        {this.show()}
        {displayReminders}
       

        

      </div>
    );
  }
}

export default App;

// componentDidMount(event) {
// fetch('/data', {
//     method: 'POST',
//     content: 'application/json',
//     body: JSON.stringify({
//       email: '',
//       username: '',
//     })
//   })
// }
