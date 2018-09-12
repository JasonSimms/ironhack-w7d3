import React from 'react'

import Card from './Card'
import Search from './Search'

const List = ({ pokemon, catchPokemon, search, handleSearchChange, searchPokemon }) => {
    const mappedPokemon = pokemon
        .filter((el, index) => index < 21)
        .map(el => <Card pokemon={el} catchPokemon={catchPokemon} key={el.id} />)
    return (
        <div className="container">
            <h1>Pokemon</h1>
            <Search
                search={search}
                handleSearchChange={handleSearchChange}
                searchPokemon={searchPokemon}
            />
            <div className="poke-flex">{mappedPokemon}</div>
        </div>
    )
}

export default List
