import React, { useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list.component'

import './App.css';


const App = () => {

  const [apiUrl, setApiUrl] = useState('https://myheroacademiaapi.com/api/character')
  const [characters, setCharacters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(apiUrl)
      const data = await resp.json()

      setCharacters(data.result)
    }

    fetchCharacters()
  }, [apiUrl])

  // componentDidMount() {
  //   fetch('https://myheroacademiaapi.com/api/character')
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         characters: data.result,
  //       })
  //     );
  // }

  const handleChange = e => {
    e.preventDefault()
    setSearchField(e.target.value)
    setApiUrl(`https://myheroacademiaapi.com/api/character?name=${searchField}`)
  }

  // const filteredCharacters = characters.filter(character => character.id.toLowerCase().includes(searchField.toLowerCase()));


  return (
    <div className="App">
      <input
        type="search"
        placeholder="search characters"
        value={searchField}
        onChange={handleChange}
      />
      <CardList characters={characters} />
    </div>
  );
}

export default App;
