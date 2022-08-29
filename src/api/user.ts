import axios from "axios";
const URL = "https://mono-test-server.herokuapp.com/api";
export const signInUser = async (payload: any) => {
    try {
        const res = await axios.post(`${URL}/users/sign-in`, payload);
        return { success: true, ...res.data };
    } catch (error) {
        return {
            success: false,
            message:
                (error as any).response?.data?.message ||
                (error as any).message,
        };
    }
};

export const signUpUser = async (payload: any) => {
    try {
        const res = await axios.post(`${URL}/users/sign-up`, payload);
        return { success: true, ...res.data };
    } catch (error) {
        console.log({ err: (error as any).reponse });
        return {
            success: false,
            message:
                (error as any).response?.data?.message ||
                (error as any).message,
        };
    }
};
export const deleteUser = async () => {
    try {
        const token = window.localStorage.getItem("token");
        const res = await axios.delete(`${URL}/users`, {
            headers: { authorization: `Bearer ${token}` },
        });
        return { success: true, ...res.data };
    } catch (error) {
        return {
            success: false,
            message:
                (error as any).response?.data?.message ||
                (error as any).message,
        };
    }
};
