import React from 'react'

import { Link } from 'react-router-dom'

const index = () => {
    return (
        <div className="container landing">
            <div className="intro">
                <h1 className="title">Welcome to our Pokemon page!</h1>
                <h3 className="subtitle">Try to catch them all.</h3>
                <Link to="/pokemon">
                    <button className="button">See all pokemon</button>
                </Link>
            </div>
        </div>
    )
}

export default index
