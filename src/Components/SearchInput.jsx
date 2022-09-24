import React, { useState } from 'react'
import { useEffect } from 'react'
import './SearchInput.css'
import Pokedata from './Pokedata';
import Pokemon from './Pokemon';
import './ButtonsStyle.css'


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
      <Pokedata pokeid={response?.id || response.status}  pokename={response?.name || response.message}/>
      <Pokemon pokeimg={response?.sprites?.versions['generation-v']['black-white']['animated']['front_default']}  />    
    <div className="form">
    <input 
      type="search"
      className="search"
      placeholder="Name or Number"
      required
      onChange={(event) => {setSearch(event.target.value.toLowerCase())}}
    />
    </div>  
     <div className="buttons">
     <button onClick={() => {setSearch(response?.id-1)}} className="button btn-prev">{String.fromCharCode(60)} Prev</button>
     <button onClick={() => {setSearch(response?.id+1)}} className="button btn-next">Next {String.fromCharCode(62)} </button>
      </div>  
    </>
  )
}

export default SearchInput
