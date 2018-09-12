import React from 'react'

const Verdict = ({ temp }) => {
    let message = 'Nice!'
    switch (true) {
        case temp > -30 && temp < -20:
            message = 'Siberia'
            break
        case temp > -20 && temp < -10:
            message = 'Welcome to Canada!'
            break
        case temp > -10 && temp < 0:
            message = 'Just a light breeze...'
            break
        case temp > 0 && temp < 10:
            message = 'Get out your swimming pants'
            break
        case temp > 10 && temp < 20:
            message = 'Summer in Germany.'
            break
        case temp > 20 && temp < 30:
            message = 'Ice Cream time!'
            break
        case temp > 30 && temp < 50:
            message = "I'm melting"
            break
        case temp > 50 && temp < 1000:
            message = "I'm vaporizing"
            break
        case temp > 1000 && temp < 5000:
            message = 'Pretty hot'
            break
        case temp > 5000 && temp < 1000000:
            message = 'Surface of the Sun'
            break
        case temp > 1000000:
            message = 'Almost cold again'
            break

        default:
            break
    }
    return <div>{message}</div>
}

export default Verdict
