import 'react-app-polyfill/ie11';
import { BrowserRouter as Router } from 'react-router-dom';
import publicRoutes from './routes';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default;
  a11y(React, ReactDOM, {
    rules: {
      'img-uses-alt': 'off',
      'redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']],
    },
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>{publicRoutes}</App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
