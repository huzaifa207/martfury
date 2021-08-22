export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
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

export function checkAuthorization() {
    return { type: actionTypes.CHECK_AUTHORIZATION };
}
