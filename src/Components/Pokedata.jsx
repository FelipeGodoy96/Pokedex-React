import React from 'react'
import './Pokedata.css'


function Pokedata (props) { 
    return (
    <>
    <h1 className="pokemon__data">
      <span className="pokemon__id">{props.pokeid}</span> -
      <span className="pokemon__name"> {props.pokename}</span>
    </h1>
    </>
  ) 
  } 


export default Pokedata
