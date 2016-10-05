import React from 'react'

import Team  from './Team'
import Match from './Match'

const style = {
    float: 'left',
    marginRight: 30
}

export default class ScoreboardContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            homeTeamPoints: 0,
            visitingTeamPoints: 0
        }
    }

    addHomePoint() {
        this.setState({
            homeTeamPoints: this.state.homeTeamPoints +1
        })
    }

    addVisitingPoint() {
        this.setState({
            visitingTeamPoints: this.state.visitingTeamPoints +1
        })
    }

    render() {
        return (
            <div style={ {clear: 'both'} }>
                <div style={ style }>
                    <h3>Casa</h3>
                    <Team
                        name     = { this.props.home.name }
                        points   = { this.state.homeTeamPoints }
                        addPoint = { this.addHomePoint.bind(this) }
                    />
                </div>
                <div style={ style }>
                    <Match
                        stadium = { this.props.match.stadium }
                        date    = { this.props.match.date }
                        time    = { this.props.match.time }
                    />
                </div>
                <div style = { style }>
                    <h3>Visitante</h3>
                    <Team
                        name     = { this.props.visiting.name }
                        points   = { this.state.visitingTeamPoints }
                        addPoint = { this.addVisitingPoint.bind(this) }
                    />
                </div>
            </div>
        )
    }
}
