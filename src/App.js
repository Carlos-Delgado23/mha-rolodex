import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    fetch('https://myheroacademiaapi.com/api/character')
      .then(response => response.json())
      .then(data => this.setState({ characters: data.result }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.characters.map(
            character =>
              <h1 key={character.id}>{character.name}</h1>
          )
        }
      </div>
    );
  }
}

export default App;
