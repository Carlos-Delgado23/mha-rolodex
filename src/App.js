import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

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
      .then(data => this.setState({
        characters: data.result,
      }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.characters.map(
            character => (
              <h1 key={character.id}>
                {character.name == null ? character.id.replace(/_/g, ' ') : character.name
                }
              </h1>
            ))}
        </CardList>

      </div>
    );
  }
}

export default App;
