import React from 'react';
import './App.styl';

export default class App extends React.Component {
  render() {
    console.log('👨‍🚀 Application properties:\n', this.props);
    return (
      <div className="app">
        <div className="app__container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
