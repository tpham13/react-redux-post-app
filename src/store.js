import { createStore, applyMiddleware } from 'redux'; 
// thunk give us access to dispatch
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// initialState is an empty object
const initialState = {};

const middleware = [thunk];

// createStore() and  applyMiddleware() is part of redux 
// createStore() takes in 3 arguements: reducers, [preloadedState], [enhancer]
// we use spread operator because we put middleware inside of an array
const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware));

export default store;