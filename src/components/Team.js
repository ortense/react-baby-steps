import React from 'react'

import GoalButton from './GoalButton'

export default class Team extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.points || 0}</h2>
                <GoalButton addPoint={ this.props.addPoint }/>
            </div>
        )
    }
}
