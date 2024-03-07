const initialState = {
  count: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "incrementType":
      return { ...state, count: state.count + action.payload };
    case "decrementType":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default countReducer;
