import React, { useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import { ButtonPage } from './components/button-page/button-page.component'

import './App.css';
import mhaLogo from './images/mhaLogo.png'


const App = () => {
  const apiUrl = 'https://myheroacademiaapi.com/api/character'
  const [characters, setCharacters] = useState([])
  const [searchField, setSearchField] = useState('')
  const [pageNum, setPageNum] = useState(1)

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  const nextPage = (e) => {
    return pageNum < 16
      ? setPageNum(pageNum + 1)
      : pageNum
  }

  const prevPage = (e) => {
    return pageNum > 1
      ? setPageNum(pageNum - 1)
      : pageNum
  }

  useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(
        searchField < 0
          ? apiUrl
          : apiUrl + `?alias=${searchField}&page=${pageNum}`)
      const data = await resp.json()

      setCharacters(data.result)
    }
    fetchCharacters()
  }, [apiUrl, searchField, pageNum])


  return (
    <div className="App">
      <img src={mhaLogo} alt="mha-logo" className="cover-fill mx-auto mt-12" />

      <div className="flex flex-col justify-center mb-6">
        <h1 className="text-2xl font-bold uppercase font-mono mt-12">Rolodex Search</h1>
        <SearchBox value={searchField} placeholder="Character Alias" handleChange={handleChange} />


        <div className="inline-flex mx-auto">
          <ButtonPage handleClick={prevPage} title='Previous Page' pageNum={pageNum} />

          <ButtonPage handleClick={nextPage} title='Next Page' />
        </div>
      </div>


      <CardList characters={characters} />
    </div>
  );
}

export default App;
