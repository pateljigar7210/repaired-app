import { UserTypes } from "./UserTypes";

const initialState = {
    loading: false,
    isLoggedIn: false,
    username: "",
    password: "",
    userData: null
};

const userReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case UserTypes.LOGIN:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                isLoggedIn: true,
            };

        case UserTypes.LOGOUT:
            return {
                ...state,
                userData:null,
                isLoggedIn: false,
            };
        case UserTypes.USER_DATA:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;