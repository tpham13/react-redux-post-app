import React from 'react';

/*
React(before implement Redux): 
The goal here is to submit a form and add those inputs to the posts[] in Posts.js
First, set the state (title, body to equal empty string)
Then recreate the form with a submit button;
then we need an onChange event to mutate the state (title, body), 
the onChange and onSubmit events need to be bound so it knows what "this" is, 
In the onChange event, make a POST fetch request to send input data the same url for posts in Posts.js, 
console.log the data from the POST request to see that when you click the submit button, title and body and id shows up in the console
THEN, IN ORDER TO GET THE INPUT DATA SUBMITTED AND ADD TO THE posts: [], WE WILL SWITCH TO REDUX TO DO THAT
*/
class Postform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };
        //we have to bind onChange to this here b/c it doesn't know what this is
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Postform </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Title: </label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label> Body: </label>
                        <input type="text" name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                        <button type="submit">Submit</button>
                    
                </form>
                
            </div>
        )
    }
    
}


export default Postform;