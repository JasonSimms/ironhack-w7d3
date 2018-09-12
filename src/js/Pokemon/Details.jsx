import React from 'react'
import { withRouter } from 'react-router'

const Details = ({ pokemon, ...props }) => {
    const matchingPokemon = pokemon.find(el => {
        return el.id === parseInt(props.match.params.id)
    })
    return (
        <div className="pokemon-details">
            <img src={matchingPokemon.picture} alt="" />
            <h1>{matchingPokemon.name}</h1>
        </div>
    )
}

export default withRouter(Details)
