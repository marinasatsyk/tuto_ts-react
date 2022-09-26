import React, { FC } from 'react';
import './App.css';
import { Person } from './components/Person';

const App: FC = () => {
  // const name: string = "Marina";
  // const age: number = 38;
  // const isMarried: boolean = true;

  // //the value of return is after ()
  // const getName = (name: string): number => {
  //   if (name === "Marina") {
  //     return 38
  //   } else {
  //     return 0
  //   }

  // }
  return (
    <Person name='Marina' age={38} email="marinasatsyk@gmail.com" />
  );
}

export default App;

// <div className="App">
    //   <h1>{name}</h1>
    // </div>

