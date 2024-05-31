import { createAction } from 'redux-actions';

export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return createAction(LOGOUT);
};
