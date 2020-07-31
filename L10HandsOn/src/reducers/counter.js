const initialState = {
  count: 0,
  clicks: 0,
  input: ''
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
    case 'CHANGE_COUNT':
      return {
        ...state,
        input: action.number
      };
    case 'INPUT_NUMBER':
      return {
        ...state,
        count: parseInt(state.input),
        clicks: 0,
        input: ''
      };
    default:
      return state;
  }
}

export default counterReducer;