import React, { useState } from 'react'
import { useEffect } from 'react'
import './SearchInput.css'
import Pokedata from './Pokedata';
import Pokemon from './Pokemon';
import Buttons from './Buttons';
// import altimg from './images/'


function SearchInput () {
  const [ search, setSearch ] = useState("");
  const [ response, setResponse ] = useState({})
 
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(req => req.json())  
    .then(res => setResponse(res))
  }, [search])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(req => req.json())
    .then(res => setResponse(res))
  }, [])

  return (
    <>
      <Pokedata pokeid={response?.id} pokename={response?.name}/>
      <Pokemon pokeimg={response?.sprites?.versions['generation-v']['black-white']['animated']['front_default']}  /> 
      <Buttons /> 

    <div className="form">
    <input 
      type="search"
      className="search"
      placeholder="Name or Number"
      required
      onChange={(event) => {setSearch(event.target.value.toLowerCase())}}
    />
    </div>    
    </>
  )
}

export default SearchInput
