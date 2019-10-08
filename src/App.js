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
    // fetch('http://localhost:3003/data')
    // .then(response => response.json())
    // .then(data => {
    //   // let data = myJson
    //   console.log(data.data);
    //   })
    let response = await fetch("http://localhost:3003/data");
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
        `http://localhost:3003/register?email=${this.state.email}.com&username=${this.state.username}`,
        { mode: "no-cors" }
      );
    } else {
      return;
    }
  };

  signInHandler = async () => {
    let data = await fetch(
      `http://localhost:3003/checkUser?username=${this.state.signInUser}`,
      { mode: "no-cors" }
    );

   await fetch (
      `http://localhost:3003/checkUserId?username=${this.state.signInUser}`
    )
      .then(response => response.json())
      .then((data) => {
        this.setState({
          persons_id: data.data
        })
        console.log(data.data)
        console.log(this.state.persons_id)
      })


    await fetch (
      `http://localhost:3003/reminder-list?persons_id=${this.state.persons_id}`
    )
     .then(response => response.json())
     .then((data) => {
        this.setState({
          reminders: [data.data]
        })
        console.log(data)

     })

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

  addReminder = () => {
    fetch(`http://localhost:3003/reminder?reminder=${this.state.newReminder}`, {
      mode: "no-cors"
    });
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
          />)
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
        {/* {this.state.signedUp ? (
          <SignIn
            forgotUser={this.state.forgotUser}
            forgotHandler={this.forgotHandler}
            signInHandler={this.signInHandler}
            signedInUserHandler={this.signedInUserHandler}
          />
        ) : (
          <SignUp
            emailHandler={this.emailHandler}
            usernameHandler={this.usernameHandler}
            signedUpHandler={this.signUpHandler}
          />
        )}

        {this.state.signedIn ? (
          <Reminder
            addReminder={this.addReminder}
            reminderHandler={this.reminderHandler}
          />
        ) : null} */}

        {/* {displayReminders} */}

        
        <h1>Reminder App!</h1>
         {/* {this.state.register? 
        <SignUp
        emailHandler={this.emailHandler}
        usernameHandler={this.usernameHandler}
        signedUpHandler={this.signUpHandler}
        />

      :

        
        <SignIn
        forgotUser={this.state.forgotUser}
        forgotHandler={this.forgotHandler}
        signInHandler={this.signInHandler}
        signedInUserHandler={this.signedInUserHandler}
        registerHandler={this.registerHandler}
        />
        }

       

        {this.state.signedIn ? (
          <Reminder
            addReminder={this.addReminder}
            reminderHandler={this.reminderHandler}
            signInUser={this.state.signInUser}
          />
        ) : null}  */}

        {this.show()}
       

        

      </div>
    );
  }
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
