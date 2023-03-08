import { authAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';


let initialSate = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialSate, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data //, isAuth: true
            };
        default:
            return state;
    };
};


export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth } };
};


export const setAuth = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true));
        }
    });
};


export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData());
        };
    });
};


export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        };
    });
};


export default authReducer;