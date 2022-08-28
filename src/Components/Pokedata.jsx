import React from 'react'
import './Pokedata.css'
import Pokedex from './Pokedex'

class Pokedata extends React.Component {
  render() {
    return (
    <>
    <h1 className="pokemon__data">
      <span className="pokemon__id">6</span> -
      <span className="pokemon__name"> charizard</span>
    </h1>
    </>
  ) 
  }
 
}

export default Pokedata