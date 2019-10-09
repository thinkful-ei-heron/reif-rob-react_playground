import React, { Component } from 'react'

export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  }

  state = {
    lastClicked: null
  }

  clickHandler = (index) => {
    this.setState({
      lastClicked: index
    })
  }

  createListItem = (item, index) => {
    return (
      <li className='accordion-item' key={index}>
        <button onClick={() => this.clickHandler(index)} ref='itemButton'>{item.title}</button>
        {(this.state.lastClicked === index) && <p>{item.content}</p>}
      </li>
    )
  }

  render() {
    return (
      <ul className="sections-container">
        {/* li element for each item in props.sections */}
        {/* <button>item.title</button> */}
        {/* onClick -> render <p>item.content</p> below */}
        {/* only one <p> visible at a time */}
        {this.props.sections.map((item, index) =>
          this.createListItem(item, index)
        )}
      </ul>
    )
  }
}
