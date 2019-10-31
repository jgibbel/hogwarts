import React from 'react'
import hogs from '../porkers_data.js'
import Tile from './Tile'
import '../App.css'

export default class Index extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }

  state = {
    sort: "name"
  }

  renderList = (str) => {
    console.log("hub")
    if (str === "name") {
      let byName = hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
      console.log(byName)
      return byName.map((hog) => (< Tile name={ hog.name } specialty={hog.specialty} greased={hog.greased} highest={hog.highest} weight={hog.weight} />))
    } else if (str === "weight") {
          let byWeight = hogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1)
          return byWeight.map((hog) => (< Tile name={ hog.name } specialty={hog.specialty} greased={hog.greased} highest={hog.highest} weight={hog.weight} />))
        } else if (str === "grease") {
              let byGrease = hogs.filter(hog => hog.greased === true)
              return byGrease.map((hog) => (< Tile name={ hog.name } specialty={hog.specialty} greased={hog.greased} highest={hog.highest} weight={hog.weight} />))
            }
  }

  changeMe = (event) => {
    this.setState({sort: event.target.value})
    // if (event.target.parentElement.nextElementSibling.style.display = "none") {
    //   event.target.parentElement.nextElementSibling.style.display = "block"
    // } else if (event.target.parentElement.nextElementSibling.style.display = "block") {
    //   event.target.parentElement.nextElementSibling.style.display = "none"
    // }
  }

  render() {

    return (
      <div><p><select onChange={this.changeMe}  name="f">
        <option value="name">By Name</option>
        <option value="grease">Greased</option>
        <option value="weight">By Weight</option>
      </select></p>
      <div className = "ui grid container">
        {this.renderList(this.state.sort)}
        <p>hi</p>
      </div>
      </div>
    )
  }
}
