// @flow
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
// @ts-ignore
import thunk from "redux-thunk";
// @ts-ignore
import { persistStore } from "redux-persist";

const middlewares = [thunk];
export const store = createStore(reducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
