import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  console.log('[fetching user]');
    const res = await axios.get('/api/current_user');
    console.log('[Fetched User Response]', res);
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const handleToken = token => async dispatch => {
  console.log('in actions index');
 const res = await axios.post('/api/stripe', token);

 dispatch({ type: FETCH_USER, payload: res.data});
}
