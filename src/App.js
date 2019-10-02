import React from 'react';
import logo from './logo.svg';
import Reminder from './components/reminder'
import './App.css';

class App extends React.Component {
  render() {

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
      <Reminder />
    </div>
  );
  }
}

export default App;
