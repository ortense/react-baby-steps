import React from 'react'

export default class GoalButton extends React.Component {

    handleClick(event) {
        event.preventDefault()
        this.props.addPoint()
    }

    render() {
        return <button onClick={ this.handleClick.bind(this) }>Gol!</button>
    }
}
