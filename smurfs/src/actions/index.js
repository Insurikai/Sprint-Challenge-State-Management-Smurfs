import axios from 'axios'

export const ADD = 'ADD';
export const add = smurf => dispatch =>{
  axios.post('http://localhost:3333/smurfs',{name: smurf.name, age: smurf.age, height: smurf.height})
  .then(response=>{
    dispatch({
      type: UPDATE,
      payload: response.data
    })})
  .catch(console.log);
}
export const REMOVE = 'REMOVE';
export const remove = id => dispatch =>{
  axios.delete(`http://localhost:3333/smurfs/${id}`,{id})
  .then(response=>{ 
    dispatch({
      type: UPDATE,
      payload: response.data
    })})
  .catch(console.log);
}
export const UPDATE = 'GET';
export const update = () => dispatch =>{
  axios.get('http://localhost:3333/smurfs')
  .then(response=>{
    dispatch({
    type: UPDATE,
    payload: response.data
  })})
  .catch(console.log);
}