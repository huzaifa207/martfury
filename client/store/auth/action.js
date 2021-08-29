export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
};

/**
 *
 * @param {identifier, password} creds
 */
export function login(creds) {
    return { type: actionTypes.LOGIN_REQUEST, creds };
}

/**
 *
 * @param {email, username, token} currentUser
 */
export function loginSuccess(currentUser) {
    return { type: actionTypes.LOGIN_SUCCESS, currentUser };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}

/**
 *
 * @param {username, email, password} creds
 */
export function register(creds) {
    return {
        type: actionTypes.REGISTER_REQUEST,
        creds,
    };
}

/**
 *
 * @param {email, username, token} currentUser
 */
export function registerSuccess(currentUser) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        currentUser,
    };
}
