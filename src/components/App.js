import React from 'react'

import HelloWorld from './HelloWorld'
import Counter    from './Counter'
import ScoreboardContainer from './ScoreboardContainer'

const mock = {
    match: {
        stadium: 'Itaquerão',
        date: '01/01/2016',
        time: '19h'
    },
    home: {
        name: 'Curintia'
    },
    visiting: {
        name: 'Parmera'
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <ScoreboardContainer
                    match    = { mock.match }
                    home     = { mock.home }
                    visiting = { mock.visiting }
                />
            </div>
        )
    }
}
