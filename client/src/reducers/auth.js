import { FETCH_USER } from '../actions/types'

export default function(state = null, action) {
  console.log('[Auth.js action]', action);
  console.log('[Auth.js state]', state);
  switch (action.type) {
    case FETCH_USER:
     return action.payload || false;
    default:
    console.log('returning state');
      return state;
  }
}
