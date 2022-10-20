export const initialState = {
  name: 'Mijail',
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_NAME':
      return {
        name: action.payload
      }
    case 'increment':
        return {...state, count: state.count + 1};
    case 'decrement':
        return {...state, count: state.count - 1};
    default:
      return state;
  }
};

export default reducer;