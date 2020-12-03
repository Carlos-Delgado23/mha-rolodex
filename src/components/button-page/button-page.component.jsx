import React from 'react'

export const ButtonPage = ({ handleClick, title, pageNum }) => {
  return (
    <div>
      <button onClick={handleClick} className={'bg-red-600 text-white hover:bg-red-800 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1'} type="button" style={{ transition: "all .15s ease" }}> {title}
      </button>
    </div>
  )
}
