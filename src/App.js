import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://myheroacademiaapi.com/api/character?name=' + this.state.searchField)
      .then(response => response.json())
      .then(data =>
        this.setState({
          characters: data.result,
        })
      );
  }

  render() {
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(character => character.id.toLowerCase().includes(searchField.toLowerCase()));


    return (
      <div className="App">
        <input type="search" placeholder="search characters" onChange={e =>
          this.setState({ searchField: e.target.value })}
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
