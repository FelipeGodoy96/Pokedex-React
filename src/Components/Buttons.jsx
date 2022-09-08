import React from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import ButtonsStyle from './ButtonsStyle.css'

function Buttons (props) {
  return (
    <div className="buttons">

      <PrevButton/>
      <NextButton/>
    </div>
    
  )
}

export default Buttons