//Taking dispatched data from component B and passing as an argument from function and giving a type to action.

export const InputData = (data) => ({
  type: "INPUTDATA",
  payload: data,
});
