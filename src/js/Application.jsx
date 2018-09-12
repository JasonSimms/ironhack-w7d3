import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './Landing'
import Pokemon from './Pokemon'

class Application extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/pokemon" component={Pokemon} />
                </div>
            </BrowserRouter>
        )
    }
}

export default Application
