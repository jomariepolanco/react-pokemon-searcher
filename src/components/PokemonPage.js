import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    api: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemons => this.setState({api: pokemons}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemons={this.state.api}/>
      </Container>
    )
  }
}

export default PokemonPage
