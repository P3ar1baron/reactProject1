import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }



switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age: 27},
        {name: 'Manusi', age: 22},
        {name: 'Steve', age: 25}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Vlad', age: 27},
        {name: event.target.value, age: 22},
        {name: 'Steve', age: 25}
      ]
    })
  }


  render() {
    return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={() => this.switchNameHandler('Andriy')}>Switch Name</button>
      <Person
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age} />
       <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this,'Sanya')}
      changed= {this.nameChangedHandler}>My Hobbies: Racing</Person>
      <Person
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} />
    </div>
  );
 }
}

export default App;





