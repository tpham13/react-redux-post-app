import React from 'react';

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