//postReducer is going to evaluate any actions that are committed.
// these actions example are: fetching a post, create a post 
//for actions we'll create what called types 

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    /*
    items array object is going to represent the posts coming in from actions 
    and action is where we put our fetch request
    */
    items: [], 
    //item represent a single post that we add, after we add the post, it will go here
    item: {}
}
// action has to have a type(that's where we evaluating)
export default function(state = initialState, action) {
    // the type is either FETCH_POSTS or NEW_POSTS
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer')
            return {
                //this is returning the state of the items being fetched
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
    //now we need to implement this is Posts component using connect (import connect in Posts component)
    // go to the Posts component and get the new post item from the state by using: 
    // mapStatetoProps() in Posts component
}