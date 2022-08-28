import React from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import ButtonsStyle from './ButtonsStyle.css'

function Buttons () {
  return (
    <div className="buttons">

      <PrevButton/>
      <NextButton/>
    </div>
    
  )
}

export default Buttons