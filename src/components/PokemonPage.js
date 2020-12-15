import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    api: [],
    // filteredApi: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemons => {
      this.setState({api: pokemons})
      this.setState({filteredApi: pokemons})
    })
  }

  createNewPokemon = (newPokeObj) => {
    const newObj = {
      name: newPokeObj.name,
      hp: newPokeObj.hp,
      sprites: {
        front: newPokeObj.frontUrl,
        back: newPokeObj.backUrl
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(newObj)
    })
    .then(r => r.json())
    .then(newPoke => this.setState({api: [...this.state.api, newPoke]}))
  }

  searchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  filterPokemon = () => {
    return this.state.api.filter(poke => poke.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon}/>
        <br />
        <Search searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
