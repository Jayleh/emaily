import server from '../apis/server';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const response = await server.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = token => async dispatch => {
  const response = await server.post('/api/stripe', token);

  // assume that we get back the user model from authReducer
  dispatch({ type: FETCH_USER, payload: response.data });
};
