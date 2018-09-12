import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Landing from './Landing'
import Pokemon from './Pokemon'

class Application extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Landing />
                    <Pokemon />
                </div>
            </BrowserRouter>
        )
    }
}

export default Application
