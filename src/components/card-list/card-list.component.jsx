import React from 'react'

export const CardList = props => {
  return <div className="w-5/6 my-0 mx-auto grid grid-cols-4 gap-5">{props.children}</div>

}