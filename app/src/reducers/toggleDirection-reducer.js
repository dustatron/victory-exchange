function toggleDirectionReducer(state = true, action) {
  switch (action.type) {
    case 'toggleView':
      return !state;
    default:
      return state;
  }
}

export default toggleDirectionReducer;
