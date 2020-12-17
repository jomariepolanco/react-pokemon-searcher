import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  handleClick = (e) => {
    // debugger
    if (e.target.src === this.props.pokeObj.sprites.front){
      e.target.src = this.props.pokeObj.sprites.back
    } else {
      e.target.src = this.props.pokeObj.sprites.front
    }
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" onMouseOver={this.handleClick} src={this.props.pokeObj.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokeObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeObj.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
