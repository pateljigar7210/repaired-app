import { UserTypes } from "./UserTypes";

export const updateUserData = (data) => {
    return (dispatch) => {
        dispatch({
            type: UserTypes.USER_DATA,
            payload: data
        });
    };
};