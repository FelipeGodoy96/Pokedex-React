import React, { useState } from 'react'
import './Pokedex.css'
import Pokedata from './Pokedata'
import Pokemon from './Pokemon'
import SearchInput from './SearchInput'
import Buttons from './Buttons'


 class Pokedex extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      pokeIndex: 0
    }
  }

  render () {
    return (
      <>
      <img src="./pokedex.png" className="pokedex" alt="pokedex" />
      <Pokedata/>
      <Pokemon />
      <SearchInput  />
      <Buttons /> 
      </>
    )
  }
}

export default Pokedex