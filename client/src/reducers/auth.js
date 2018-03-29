import { FETCH_USER } from '../actions/types'

export default function(state = null, action) {
  console.log('[Auth.js action]', action);
  console.log('[Auth.js state]', state);
  console.log(state);
  switch (action.type) {
    case FETCH_USER:
     return action.payload || false;
    default:
      return state;
  }
}
