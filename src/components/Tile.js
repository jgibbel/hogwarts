import React from 'react'

export default class Tile extends React.Component {

  state = {
    toggle: false
  }

  toggle = () => {
    // this.setState({ toggle: this.state.toggle ? false : true })
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const file = this.props.name.split(" ").join("_").toLowerCase()
    const path = `/hog-imgs/${file}.jpg`
    let isGreased
    if (this.props.greased) {
      isGreased = "Greased"
    } else {
      isGreased = "Not Greased"
    }
    return(
      <div className="ui eight wide column">
        <div onClick={ this.toggle }>
          <h1>{ this.props.name }</h1>
          <img src={ path } alt={ this.props.name } />
        </div>
        {this.state.toggle ?
          <div>
            <p>Specialty: { this.props.specialty }</p>
            <p>{ isGreased }</p>
            <p>Weight: { this.props.weight }</p>
            <p>{ this.props.highest }</p>
          </div> : null}
      </div>
  )
}
}
