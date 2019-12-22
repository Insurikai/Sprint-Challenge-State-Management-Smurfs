import React from 'react'

export default (props)=>{
  return(
    <div className="smurf">
      <h1>{`Name: ${props.smurf.name}`}</h1>
      <h3>{`Age:${props.smurf.age}`}</h3>
      <h3>{`Height:${props.smurf.height}`}</h3>
      <button onClick={()=>{props.remove(props.smurf.id)}}>Banish {props.smurf.name}</button>
    </div>
  )
}

