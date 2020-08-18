import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>  {
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age} 
       />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}> 
      My Hobbies: Racing
      </Person>
      <Person
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} />
    </div>
  );

  switchNameHandler = () => {
    // console.log('Was clicked !');
    // this.state.persons[0].name = 'Vlad';
    this.setState( {
      persons: [
        {name: 'Vlad', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

}  
export default app;


state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value'
}