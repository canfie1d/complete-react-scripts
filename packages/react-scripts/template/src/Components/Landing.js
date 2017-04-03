import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="remove-this">
        <p>
          👨‍🚀 Welcome to Helpful Human's React template. Check the console for application properties.
        </p>
        <br />
        <br />
        <p>Demo Redux store</p>
        <div>
          <button onClick={this.props.subtractNumber}>Subtract</button>
          <button onClick={this.props.addNumber}>Add</button>
        </div>
        <p>value: {this.props.number}</p>
      </div>
    );
  }
}
