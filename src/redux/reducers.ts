// @flow

import { combineReducers } from "redux";
// @ts-ignore
import { persistReducer } from "redux-persist";
// @ts-ignore
import sessionStorage from "redux-persist/lib/storage/session";

import userReducer from "./reducer/user.reducer";
import actionReducer from "./reducer/account.reducer";
import trxReducer from "./reducer/trx.reducer";
const config = {
    key: "root",
    storage: sessionStorage,
    whitelist: ["user"],
};
const rootReducer = combineReducers({
    user: userReducer,
    accounts: actionReducer,
    trx: trxReducer,
});

export default persistReducer(config, rootReducer);
