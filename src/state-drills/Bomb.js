import React, { Component } from 'react'

export default class Bomb extends Component {
  state = {
    current: '',
    count: 0
  }

  componentDidMount() {
    this.interval = setInterval(
      this.updateCount, 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count === 8) {
      this.setState({ current: 'BOOM' })
      clearInterval(this.interval)
    } else if (this.state.count % 2 === 0) {
      this.setState({ current: 'tock' })
    } else if (this.state.count % 2 !== 0) {
      this.setState({ current: 'tick' })
    } else if (this.state.count > 8) {
      clearInterval(this.interval)
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.current}</p>
      </div>
    )
  }
}