import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import auth from './auth';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  auth
});

export default reducer;