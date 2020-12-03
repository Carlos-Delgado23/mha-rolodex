import React, { useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';


const App = () => {
  const apiUrl = 'https://myheroacademiaapi.com/api/character'
  const [characters, setCharacters] = useState([])
  const [searchField, setSearchField] = useState('')

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(searchField < 0 ? apiUrl : apiUrl + `?alias=${searchField}`)
      const data = await resp.json()

      setCharacters(data.result)
    }
    fetchCharacters()
  }, [apiUrl, searchField])


  return (
    <div className="App">
      <SearchBox value={searchField} placeholder="Search Characters" handleChange={handleChange} />
      <CardList characters={characters} />
    </div>
  );
}

export default App;
