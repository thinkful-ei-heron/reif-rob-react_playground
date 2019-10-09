import React, { Component } from 'react'

export default class RouletteGun extends Component {
  state = {
    chamber: null,
    spinningTheChamber: false
  }


  componentWillUnmount() { clearTimeout(this.timeout) }

  clickHandler = () => {
    this.setState({
      spinningTheChamber: true
    })
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber: false,
      })
    }, 2000)
  }

  getOutputText = () => {
    let outcomeText;
    if (this.state.spinningTheChamber) {
      outcomeText = 'spinning the chamber and pulling the trigger!...';
    } else if (this.state.chamber === this.props.bulletInChamber) {
      outcomeText = 'BANG!!!!'
    } else {
      outcomeText = "you're safe";
    }
    return outcomeText;
  }
  // 'spinning the chamber and pulling the trigger!...'

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Pull the trigger!</button>
        <p>{this.getOutputText()}</p>
      </div>
    )
  }
}

// componentDidMount() {
//   this.interval = setInterval(
//     this.updateCount, 1000
//   )
// }

// componentWillUnmount() {
//   clearInterval(this.interval)
// }

// updateCount = () => {
//   this.setState({
//     count: this.state.count + 1
//   })
//   if (this.state.count === 8) {
//     this.setState({ current: 'BOOM' })
//     clearInterval(this.interval)
//   } else if (this.state.count % 2 === 0) {
//     this.setState({ current: 'tock' })
//   } else if (this.state.count % 2 !== 0) {
//     this.setState({ current: 'tick' })
//   } else if (this.state.count > 8) {
//     clearInterval(this.interval)
//   }
// }

