import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
   // individual reducers go here
   todos,
})

export default rootReducer



