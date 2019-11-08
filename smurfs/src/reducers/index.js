import {UPDATE} from '../actions';


export const villageHandler = (state = [], action) =>{
  switch(action.type){
    case UPDATE:
      return action.payload
    default:
      return state
  }
}