import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Navigation = props => {
    console.log(props)

    if (props.location.pathname === '/') return null

    return (
        <div className="navigation">
            <Link to="/">Home</Link>
            {'     '}
            <Link to="/pokemon">Pokemon</Link>
        </div>
    )
}

export default withRouter(Navigation)
