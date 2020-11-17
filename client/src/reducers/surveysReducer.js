import { FETCH_SURVEYS } from '../actions/types';

//returns null by default
export default function(state = [], action) {
    switch (action.type) {
      case FETCH_SURVEYS:
        return action.payload || false 
      default:
        return state;
    }
  }