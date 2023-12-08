import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import formAddReducer from "./formAddReducer";
import globalReducer from "./globalReducer";
import updateInforReducer from "./updateInforReducer";

const rootReducer = combineReducers({
  
  // Thêm các reducer khác ở đây
});

export default rootReducer;
