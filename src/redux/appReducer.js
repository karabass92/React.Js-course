import { setAuth } from "./authReducer";


const SET_INITIALIZED = 'app/SET_INITIALIZED';


let initialSate = {
    initialized: false
};


const appReducer = (state = initialSate, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, 
                initialized: true
            };
        default:
            return state;
    };
};


export const initializedSuccess = () => {
    return { type: SET_INITIALIZED };
};


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuth());
    Promise.all([promise]).then( () => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;