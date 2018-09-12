import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Card = ({ pokemon, catchPokemon }) => {
    return (
        <div className={`card ${pokemon.jname ? 'caught' : ''}`}>
            <img src={pokemon.picture} alt="" />
            <Link to={`/pokemon/${pokemon.id}`}>
                <h4 className="name">{pokemon.name}</h4>
            </Link>
            {pokemon.jname ? (
                <span>{pokemon.jname}</span>
            ) : (
                <button onClick={() => catchPokemon(pokemon.id)}>Catch!</button>
            )}
        </div>
    )
}

export default Card
