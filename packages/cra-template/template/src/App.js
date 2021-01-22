import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">{this.props.children}</div>
      </div>
    );
  }
}
