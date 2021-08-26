import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    currentUser: undefined,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.currentUser,
            };
        case actionTypes.LOGOUT_SUCCESS:
            return initState;

        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.currentUser,
            };
        default:
            return state;
    }
}

export default reducer;
