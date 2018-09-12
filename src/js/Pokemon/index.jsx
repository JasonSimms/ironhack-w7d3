import React, { Component } from 'react'
import axios from 'axios'

import List from './List'

class Pokemon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            pokemon: [],
            search: {
                name: '',
                minHp: '',
            },
        }

        this._catchPokemon = this._catchPokemon.bind(this)
        this._searchPokemon = this._searchPokemon.bind(this)
        this._handleSearchChange = this._handleSearchChange.bind(this)
    }

    componentDidMount() {
        axios
            .get('https://ironhack-pokeapi.herokuapp.com/pokemon')
            .then(result => {
                this.setState({ pokemon: result.data, loading: false })
            })
            .catch(console.error)
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container">
                    <h1>Loading...</h1>
                </div>
            )
        }

        return (
            <List
                pokemon={this.state.pokemon}
                search={this.state.search}
                catchPokemon={this._catchPokemon}
                handleSearchChange={this._handleSearchChange}
                searchPokemon={this._searchPokemon}
            />
        )
    }

    _searchPokemon(event) {
        event.preventDefault()
        axios
            .get(
                `https://ironhack-pokeapi.herokuapp.com/pokemon?name=${this.state.search.name}&minHp=${
                    this.state.search.minHp
                }`
            )
            .then(({ data }) => {
                this.setState({
                    pokemon: data,
                })
            })
    }

    _handleSearchChange(key, value) {
        const newSearch = { ...this.state.search }

        newSearch[key] = value

        this.setState({
            search: newSearch,
        })
    }

    _catchPokemon(id) {
        if (Math.random() < 0.8) return

        axios.get(`https://ironhack-pokeapi.herokuapp.com/pokemon/${id}`).then(({ data }) => {
            this.setState({
                pokemon: this.state.pokemon.map(el => {
                    if (el.id !== id) return el

                    return data
                }),
            })
        })
    }
}

export default Pokemon
