import { STORE_USER_DATA } from "../types";
const INITIAL_STATE = {
    user: {},
};

const userReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case STORE_USER_DATA:
            return { ...state, user: { ...action.payload } };

        default:
            return state;
    }
};
export default userReducer;
