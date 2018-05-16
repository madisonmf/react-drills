import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      frandz: [
        "LT",
        "Mikros",
        "McA",
        "Kayla Ren",
        "Sasha",
        "Omi Wan",
        "Leah",
        "Lil"
      ]
  }
}

render () {
  let frandzToDisplay = this.state.frandz.map((element, index) => {
    return (
      <h2 key={index}>{element}</h2>
    )
  })

  return (
    <div className="App">
      { frandzToDisplay }
    </div>
  );
}
}

export default App;