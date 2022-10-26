import { combineReducers } from "redux";
import optionReducer from "./optionReducer";

let reducers = combineReducers({
  optionReducer: optionReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
