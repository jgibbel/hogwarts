import React from 'react'
import hogs from '../porkers_data.js'
import Tile from './Tile'

export default class Index extends React.Component {

  state = {
    sort: "name"
  }

  renderList = () => {
    if (this.state.sort === "name") {
      let byName = hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
      return this.createTiles(byName)
    } else if (this.state.sort === "weight") {
      let byWeight = hogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1)
      return this.createTiles(byWeight)
    } else if (this.state.sort === "grease") {
      let byGrease = hogs.filter(hog => hog.greased === true)
      return this.createTiles(byGrease)
    }
  }

  createTiles = (array) => {
    return array.map(hog => < Tile name={ hog.name } specialty={ hog.specialty } greased={ hog.greased } highest={ hog.highest } weight={ hog.weight } />)
  }

  changeMe = (event) => {
    this.setState({ sort: event.target.value })
  }

  render() {
    return (
      <div>
        <p>
          <select onChange={ this.changeMe }>
            <option value="name">By Name</option>
            <option value="grease">Greased</option>
            <option value="weight">By Weight</option>
          </select>
        </p>
        <div className = "ui grid container">
          { this.renderList() }
        </div>
      </div>
    )
  }
}
