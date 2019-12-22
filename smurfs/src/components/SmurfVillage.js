import React from 'react'
import Smurf from './Smurf'

export default (props)=>{
  return(
    <div className="village">
      {
        props.smurfs.map(smurf=><Smurf remove={props.remove} smurf={smurf} key={smurf.id}/>)
      }
    </div>
  )
}

