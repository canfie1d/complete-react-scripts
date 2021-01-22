import { useContext } from 'react';
import { Context } from '../Contexts/AppStore';

const Home = props => {
  const [state, dispatch] = useContext(Context);

  if (process.env.NODE_ENV !== 'production') {
    console.table('Router properties:\n', props);
  }

  return (
    <div className="home">
      <span className="human" role="img" aria-label="scientist">
        🏋🏼‍
      </span>
      <div>
        <h1>Welcome to your Complete React template.</h1>
        <h2>Check the console for router properties.</h2>
        <h2>~or~</h2>
        <h2>Edit Home.js to get started.</h2>
      </div>
      <h3>Context Demo</h3>
      <div>
        <button onClick={() => dispatch({ type: 'SUBTRACT_NUMBER' })}>
          Subtract
        </button>
        <button onClick={() => dispatch({ type: 'ADD_NUMBER' })}>Add</button>
        <div>value: {state.value}</div>
      </div>
    </div>
  );
};

export default Home;
