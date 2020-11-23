import React from 'react'

export const Card = (props) => {
  return (
    <div className="flex flex-col items-center bg-yellow-400 border rounded-md border-yellow-500 p-4 cursor-pointer transition duration-200 ease-out transform hover:-translate hover:scale-110 w-56">
      <img alt="character" src={props.character.images[0]} className="h-40 w-40" />
      <h2 className="text-lg uppercase font-bold font-mono mt-4 mb-3 underline">
        {
          props.character.name == null
            ? props.character.id.replace(/_/g, ' ')
            : props.character.name
        }
      </h2>
      <div className="text-base font-medium">
        <p>
          <span className="">Quirk: </span>
          {props.character.quirk == null
            ? 'Unlisted'
            : props.character.quirk}
        </p>
        <p className="mt-2">{props.character.occupation}</p>
      </div>
    </div >
  )
}
