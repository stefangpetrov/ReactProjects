import React, {Component} from 'react'

class Counter extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState((prevState, props) => ({
            
            count: prevState.count + props.addValue
        }))

        console.log(this.props)
    }
    render() {
        return(
            <div>
                <h1>Counter - {this.state.count}</h1>
                <button onClick = {() => this.increment()}>Increase</button>
            </div>
        )
    }
}

export default Counter