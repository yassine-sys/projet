import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { PartenaireReducer } from "./reducer/PartenaireReducer";
const middleware = [thunk];
const store = createStore(  PartenaireReducer,  composeWithDevTools(applyMiddleware(...middleware)));
export default store;