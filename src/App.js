import React, { useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list.component'

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
      const resp = await fetch(searchField < 0 ? apiUrl : apiUrl + `?name=${searchField}`)
      const data = await resp.json()

      setCharacters(data.result)
    }
    fetchCharacters()
  }, [apiUrl, searchField])


  return (
    <div className="App">
      <input
        type="text"
        value={searchField}
        placeholder="Search Characters"
        onChange={handleChange}
        className="my-6 py-2 px-3 border border-yellow-800 rounded-xl shadow-lg shadow-outline outline-none"
      />
      <CardList characters={characters} />
    </div>
  );
}

export default App;
