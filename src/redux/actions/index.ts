import { STORE_ACCOUNT, STORE_TRX, STORE_USER_DATA } from "../types";

export const storeData = (payload: any) => async (dispatch: Function) => {
    dispatch({
        type: STORE_USER_DATA,
        payload,
    });
};

export const storeTrx = (payload: any) => async (dispatch: Function) => {
    dispatch({
        type: STORE_TRX,
        payload,
    });
};

export const storeAccount = (payload: any) => async (dispatch: Function) => {
    dispatch({
        type: STORE_ACCOUNT,
        payload,
    });
};
