const initialState = { count: 0 };
export default function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'counter/increment':
      return {
        ...state,
        count: state.count + action.howMuch
      }
    default:
      return state;
  }
}
