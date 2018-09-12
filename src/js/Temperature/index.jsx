import React, { Component } from 'react'

import Control from './Control'
import Verdict from './Verdict'

class Temperature extends Component {
    constructor(props) {
        super(props)

        this.state = {
            temp: 15, // °K
        }

        this._handleChange = this._handleChange.bind(this)
    }

    render() {
        return (
            <div className="container">
                <h1>Temperature Converter</h1>
                <Control type="k" handleChange={this._handleChange} convertedTemp={this.state.temp} />
                <Control
                    type="f"
                    handleChange={this._handleChange}
                    convertedTemp={this._transformTemp('k', 'f', this.state.temp)}
                />
                <Control
                    type="c"
                    handleChange={this._handleChange}
                    convertedTemp={this._transformTemp('k', 'c', this.state.temp)}
                />
                <Verdict temp={this._transformTemp('k', 'c', this.state.temp)} />
            </div>
        )
    }

    _transformTemp(from, to, value) {
        if (value === '') return value

        value = parseFloat(value)
        if (from === 'k') {
            if (to === 'c') return value - 273
            else if (to === 'f') return (value * 9) / 5 - 459.67
            else return value
        } else if (from === 'c') {
            if (to === 'k') return value + 273
        } else if (from === 'f') {
            if (to === 'k') return ((value + 459.67) * 5) / 9
        }

        return -999
    }

    _handleChange(type, newValue) {
        const convertedValue = this._transformTemp(type, 'k', newValue)

        this.setState({
            temp: newValue === '' ? '' : convertedValue,
        })
    }
}

export default Temperature
