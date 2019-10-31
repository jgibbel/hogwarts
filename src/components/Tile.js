import React from 'react'


class Tile extends React.Component {

  state = {
    toggle: false
  }

  toggle = () => {
    this.setState({toggle: this.state.toggle ? false : true})
    // if (event.target.parentElement.nextElementSibling.style.display = "none") {
    //   event.target.parentElement.nextElementSibling.style.display = "block"
    // } else if (event.target.parentElement.nextElementSibling.style.display = "block") {
    //   event.target.parentElement.nextElementSibling.style.display = "none"
    // }
  }

  render() {
    const file = this.props.name.split(" ").join("_").toLowerCase()
    const path = `/hog-imgs/${file}.jpg`
    let x
    if (this.props.greased) {
      x = "Greased"
    } else {
      x = "Not Greased"
    }
    return(
      <div className="ui eight wide column">
      <div onClick={this.toggle}><h1>{ this.props.name }</h1>
      <img src={path} alt={ this.props.name } /></div>
      {this.state.toggle ?
      <div>
      <p>{ this.props.specialty }</p>
      <p>{ x }</p>
      <p>{ this.props.weight }</p>
      <p>{ this.props.highest }</p>
      </div> : null}
      </div>
  )
}
}
 export default Tile;
