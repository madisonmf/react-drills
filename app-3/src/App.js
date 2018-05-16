import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      filterString: "",
      force: [
        "Peckarskywalker",
        "MadiSith",
        "Kayla Ren",
        "C3-POpe",
        "Jabba the Schmutz",
        "Omi Wan",
        "PadMary"
      ]
    }
  }

  handleChange (filter) {
    this.setState({
      filterString: filter
    })
  }

  render () {
    let forceToDisplay = this.state.force.filter((element, index) => {
      return element.includes(this.state.filterString);
    }).map((element, index) => {
      return <h2 key={ index }>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={ event => this.handleChange(event.target.value)} type="text" />
        { forceToDisplay }
      </div>
    )
  }
}

export default App;