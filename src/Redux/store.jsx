import { createStore } from "redux";
import { reducer } from "./reducer";

//Import reducer from reducer and passit as a argument in function of createstore.

export const store = createStore(reducer);
