import React, { useState } from 'react'
import './SearchInput.css'

function SearchInput (props) {
  const [search, setSearch] = useState("");
  const fetchPokemon = async () => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    props = APIResponse
  }
  
fetchPokemon()
  return (
    <>
    <div className="form">
    <input 
      type="search"
      className="search"
      placeholder="Name or Number"
      required
      onChange={(event) => {setSearch(event.target.value)}}
    />
    </div>    
    </>
  )
}

export default SearchInput