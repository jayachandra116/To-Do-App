import { combineReducers } from "redux";
import toDoReducer from "./todoReducer";

const reducer = combineReducers({
  todo: toDoReducer,
});

export default reducer;
