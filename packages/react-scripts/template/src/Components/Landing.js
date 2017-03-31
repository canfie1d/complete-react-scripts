import React from 'react';

export default class Landing extends React.Component {
  render () {
    return (
      <div>
        Welcome to Helpful Human's React boilerplate :)
        <br />
        <br />
        <button onClick={this.props.addNumber}>Add</button>
        val: {this.props.number}
        <button onClick={this.props.subtractNumber}>Subtract</button>
      </div>
    )
  }
}
