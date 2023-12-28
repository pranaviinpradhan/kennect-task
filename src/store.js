// store.js
import { createStoreHook } from "react-redux";
import rootReducer from "./reducer";

const store = createStoreHook(rootReducer);

export default store;
