import React from 'react'

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    increment() {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrement() {
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return (
            <section>
                <h2>{this.state.value}</h2>
                <button onClick={this.decrement.bind(this)}>-</button>
                <button onClick={this.increment.bind(this)}>+</button>
            </section>
        )
    }
}
