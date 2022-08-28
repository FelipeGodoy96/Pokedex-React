import React from "react";
import Pokedex from "./Pokedex"

class PrevButton extends React.Component {
  constructor (props) {
    super(props) 
      this.state = {
        pokeIndex: 0
      }
    

   this.nextPokemon = this.nextPokemon.bind(this)
  }

  nextPokemon () {
    if (this.state.pokeIndex > 0) {
      this.state.pokeIndex -= 1
    }
    console.log(this.state.pokeIndex)
  }

  render() {
    return (
      <button onClick={this.nextPokemon}className="button btn-prev">{String.fromCharCode(60)} Prev</button>
    )
  }
}

export default PrevButton