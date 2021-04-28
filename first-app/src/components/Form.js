import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.comments}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type = 'text' value = {this.state.username} onChange = {this.handleUsernameChange}></input>
                    <div>
                    <label>Comments</label>
                    <textarea value = {this.state.comments} onChange = {this.handleCommentsChange}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
