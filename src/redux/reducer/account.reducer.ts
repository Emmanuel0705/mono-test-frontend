import { STORE_ACCOUNT } from "../types";
const INITIAL_STATE = {
    accounts: [],
};

const actionReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case STORE_ACCOUNT:
            return { ...state, accounts: action.payload };
        default:
            return state;
    }
};
export default actionReducer;
