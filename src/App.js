import React, { useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';
import mhaLogo from './images/mhaLogo.png'


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
      <img src={mhaLogo} alt="mha-logo" className="cover-fill mx-auto mt-12" />

      <h1 className="text-xl font-bold uppercase font-mono mt-12">Rolodex Search</h1>
      <SearchBox value={searchField} placeholder="Character Alias" handleChange={handleChange} />
      <CardList characters={characters} />
    </div>
  );
}

export default App;
