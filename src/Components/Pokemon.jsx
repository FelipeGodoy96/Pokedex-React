import React from 'react'
import './Pokemon.css'

function Pokemon (props)  {
    return (
      <>
    <img src={props.pokeimg} alt=" pokemon" onMouseEnter={() => {}} className="pokemon__image" />
      </>
  )  
}

export default Pokemon