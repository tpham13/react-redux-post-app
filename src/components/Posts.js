import React from 'react';
// connect component comes from Provider as well
// it connects your component to your redux store that was provided by the Provider component
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
/*
React(before implement Redux):
First set the state (posts to an empty []), 
then make a fetch request to the post fake api, 
then setState() to fill posts: [] with the data that we got from fetch, 
then we need to render the posts by map over the posts array, 
then render title and body of each post element 
*/ 
class Posts extends React.Component {
    componentWillMount() {
        // this.props.fetchPosts is a callback action 
        this.props.fetchPosts();
    }
   
    /*
    We took out the constructor b/c we don't need the component state(posts: []) anymore 
    because the posts:[] will come from redux, from the application state, store
    */ 

    /*we took out the componentDidMount() where we made a fetch request to grab posts. 
        we put the fetch request inside the postActions 
    */
   render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    // posts is coming from './reducers/index.js'
    posts: state.posts.items,
    // newPost: state.posts.item
  });

// connect takes in two argues (one of the arguements is required. It's either ... or null)
export default connect(mapStateToProps, {fetchPosts})(Posts);