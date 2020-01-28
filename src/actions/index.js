import qs from 'qs'
import axios from 'axios';
import { AUTH_WORKSPACE, AUTH_USER, AUTH_ERROR, AUTH_USER_ERROR } from './types';



export const validate_workspace = (formProps, callback) => async dispatch => {

    const response = await axios({
      method: 'post',
      url: 'https://slack.com/api/auth.findTeam',
      data: qs.stringify(formProps),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    
    if (response.data.ok) {
      dispatch({ type: AUTH_WORKSPACE, payload:{...formProps, ...response.data} });
      callback()
    } else {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }

};

export const signin = (formProps, callback) => async dispatch => {

  const response = await axios({
    method: 'post',
    url: 'https://slack.com/api/auth.signin',
    data: qs.stringify(formProps),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
  
  if (response.data.ok) {
    dispatch({ type: AUTH_USER, payload:{...formProps, ...response.data} });
    callback()
  } else {
    dispatch({ type: AUTH_USER_ERROR, payload: 'Invalid login credentials' });
  }

};
