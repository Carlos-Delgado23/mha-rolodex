import React from 'react'

import { Card } from '../card/card.component'

export const CardList = props => {
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      {props.characters.map(
        character => (
          <Card key={character.id} character={character} />
        ))}
    </div>
  )
}