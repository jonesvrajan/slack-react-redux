import { AUTH_WORKSPACE, AUTH_USER, AUTH_ERROR, AUTH_USER_ERROR } from '../actions/types';

const INITIAL_STATE = {
  workspace: '',
  user: '',
  errorMessage: '',
  userErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_WORKSPACE:
      return { ...state, workspace: action.payload };
    case AUTH_USER:
      return { ...state, user: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
      case AUTH_USER_ERROR:
      return { ...state, userErrorMessage: action.payload };
    default:
      return state;
  }
}
