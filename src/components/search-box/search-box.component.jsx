import React from 'react'

export const SearchBox = ({ placeholder, handleChange, searchField }) => {
  return (
    <div>
      <input
        type="text"
        value={searchField}
        placeholder={placeholder}
        onChange={handleChange}
        className="mb-2 py-2 px-3 border border-yellow-800 rounded-xl shadow-lg shadow-outline outline-none"
      />
    </div>
  )
}
