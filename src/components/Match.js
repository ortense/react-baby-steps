import React from 'react'

export default class Match extends React.Component {
    render() {
        return (
            <div>
                <h2>{ this.props.stadium }</h2>
                <div>
                    <span>{ this.props.date }</span>
                    <span> - </span>
                    <span>{ this.props.time }</span>
                </div>
            </div>
        )
    }
}
