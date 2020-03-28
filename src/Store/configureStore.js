import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../containers/Home/Reducers";

const initialState = {};
const middleWare = [thunk];
const configureStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);
export default configureStore;
