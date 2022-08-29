import { STORE_TRX } from "../types";
const INITIAL_STATE = {
    trx: [],
};

const trxReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case STORE_TRX:
            return { ...state, trx: action.payload };
        default:
            return state;
    }
};
export default trxReducer;
