import React from 'react'

export const Card = (props) => {
  return (
    <div className="m-2 px-2 w-2/5 overflow-hidden lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/4 items-center flex flex-col py-4 bg-yellow-400 border rounded-md border-yellow-500 cursor-pointer transition duration-200 ease-out transform hover:bg-yellow-600">
      <img alt="character" src={props.character.images[0]} className="h-40 w-40" />
      <h2 className="text-lg uppercase font-bold font-mono mt-4 mb-3">
        {
          props.character.name == null
            ? props.character.id.replace(/_/g, ' ')
            : props.character.name
        }
      </h2>
      <div className="text-base font-medium">
        <p className="mb-2">
          <span className="italic">Quirk: </span>
          {props.character.quirk == null
            ? 'Unlisted'
            : props.character.quirk}
        </p>
        <p>
          <span className="italic">Alias: </span>
          {props.character.alias == null
            ? 'Unlisted'
            : props.character.alias}
        </p>
        <p className="mt-2"><span className="italic">Occ: </span> {props.character.occupation}</p>
      </div>
    </div >
  )
}
