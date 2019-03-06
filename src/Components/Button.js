
import React from 'react'

export default function Button(props) {
// props are buttonText and OnClickFunction;    
const onButtonClick = (e) =>{
    e.preventDefault();
    props.clickFunc();
    
  }  
  return (
       <button onClick = {onButtonClick} className= {props.deleteBtn ? "btn delete" : "btn"}><span className= {props.deleteBtn ? "btn__text delete__text" : "btn__text"}>{props.buttonText}</span></button>
  )
}