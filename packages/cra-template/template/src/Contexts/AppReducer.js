const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        value: state.value++,
      };
    case 'SUBTRACT_NUMBER':
      return {
        ...state,
        value: state.value--,
      };
    default:
      return state;
  }
};

export default Reducer;
