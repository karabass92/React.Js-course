import { stopSubmit } from "redux-form";
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
                ...state, ...action.data
            };
        default:
            return state;
    };
};


export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth } };
};


export const setAuth = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true));
        }
    });
};


export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuth());
        } else {
            let message = (response.data.messages.length > 0) ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}));
        }
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