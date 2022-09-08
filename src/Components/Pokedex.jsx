import React, { useState } from 'react'
import './Pokedex.css'
import SearchInput from './SearchInput'


function Pokedex () {
   
    return (
      <>
      <img src="./pokedex.png" className="pokedex" alt="pokedex" />    
      <SearchInput  />
      </>
    )
  
}

export default Pokedex