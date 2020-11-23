import React from 'react'

import { Card } from '../card/card.component'

export const CardList = props => {
  return (
    <div className="w-5/6 my-0 mx-auto grid grid-cols-4 gap-5">
      {props.characters.map(
        character => (
          <Card key={character.id} character={character} />
        ))}
    </div>
  )
}