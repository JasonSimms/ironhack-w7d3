import React from 'react'

// TODO display an input with for the temperature in the given type
const Control = props => {
    return (
        <div>
            <input
                type="number"
                value={props.convertedTemp === '' ? '' : parseFloat(props.convertedTemp).toFixed(0)}
                onChange={evt => props.handleChange(props.type, evt.target.value)}
            />{' '}
            °{props.type.toUpperCase()}
        </div>
    )
}

export default Control
