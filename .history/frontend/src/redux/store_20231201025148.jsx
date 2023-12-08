// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Tạo tệp này

const store = createStore(rootReducer);

export default store;
