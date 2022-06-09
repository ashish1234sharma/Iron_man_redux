//Setting up a initial state in reducer and take data from action as payload and type of action as type using switch
//case to write some logic on data
const initialState = {
  InputTextData: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INPUTDATA":
      return {
        ...state,
        InputTextData: payload,
      };
    default:
      return state;
  }
};
