import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <section className="easter-egg">
          <p className="easter-egg__spacheman">👨‍🚀</p>
          <p className="easter-egg__rocket">🚀</p>
        </section>
        <div>
          <h1>Welcome to Helpful Human's React template.</h1>
          <h2>Check the console for application properties.</h2>
        </div>
        <h3>Demo Redux store</h3>
        <br />
        <button onClick={this.props.subtractNumber}>Subtract</button>
        <button onClick={this.props.addNumber}>Add</button>
        <br />
        <br />
        <span>value: {this.props.number}</span>
      </div>
    );
  }
}
