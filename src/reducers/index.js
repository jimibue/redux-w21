import { combineReducers } from "redux";
import filter from "./filter";
import memes from "./memes";
import nextId from "./nextId";
import todos from "./todos";
import user from "./user";

const rootReducer = combineReducers({
   // individual reducers go here
   todos,
   nextId,
   filter,
   user,
   memes
})

export default rootReducer



