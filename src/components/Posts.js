import React from 'react';

/*
React(before implement Redux):
First set the state (posts to an empty []), 
then make a fetch request to the post fake api, 
then setState() to fill posts: [] with the data that we got from fetch, 
then we need to render the posts by map over the posts array, 
then render title and body of each post element 
*/ 
class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            // when we make a fetch request we want to fill the posts empty array(in state) with this data
            .then(data => this.setState({ posts: data }));
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts </h1>
                {postItems}
            </div>
        )
    }
}


export default Posts;