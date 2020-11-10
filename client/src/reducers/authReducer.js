import { FETCH_USER } from '../actions/types';

//returns null by default
export default function(state = null, action) {
  console.log(action);
    switch (action.type) {
      case FETCH_USER:
        return action.payload || false //returns the user model or false if action.payload === '' (empty string)
      default:
        return state;
    }
  }