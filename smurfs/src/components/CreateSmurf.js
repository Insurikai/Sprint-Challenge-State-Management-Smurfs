import React,{useState} from 'react'

export default (props)=>{
  const [smurf,setSmurf] = useState({name:'',age:1,height:'1cm'});
  const nameChange = (e) =>{setSmurf({...smurf, name: e.target.value})}
  const ageChange = (e) =>{setSmurf({...smurf, age: e.target.value})}
  const heightChange = (e) =>{setSmurf({...smurf, height: e.target.value})}
  return(
    <form className="smurf" onSubmit={e=>{e.preventDefault();props.add(smurf); setSmurf({name:'',age:1,height:'1cm'})}}>
      <input type="text" onChange={nameChange} value={smurf.name} name='name'/>
      <input type="text" onChange={ageChange} value={smurf.age} name='age'/>
      <input type="text" onChange={heightChange} value={smurf.height} name='height'/>
      <input type="submit"/>
    </form>
  )
}

