import { FETCH_POSTS, NEW_POST } from './types';

// the thunk middleware allow to call dispatch() directly so  we can make an asynchronous request 
// dispatch is like a resolver and a promise and then pass in what we want to pass in
export const fetchPosts = () => dispatch => {
        console.log('fetch')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            // when we make a fetch request we want to fill the posts empty array(in state) with this data
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
        }));
        // now we're diong to dispatch posts to the reducer is postReducer
}
