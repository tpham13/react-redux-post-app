// combineReducer function from 'redux' combine all the reducer 
import { combineReducers } from 'redux';
import postReducer from './postReducer';

// call combineReducers() and send in the object posts
export default combineReducers({
    posts: postReducer
});