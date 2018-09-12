import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'
import Navigation from './Navigation'
import Landing from './Landing'
import Pokemon from './Pokemon'

class Application extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/pokemon" component={Pokemon} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Application
