import { combineReducers } from "redux";
import chatBot from "./chatBot";
import editor from "./editor";

export default combineReducers({
  chatBot,
  editor,
});
