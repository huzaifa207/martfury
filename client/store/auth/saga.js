import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { notification } from 'antd';
import Repository, { baseUrl } from '~/repositories/Repository';

import {
    actionTypes,
    loginSuccess,
    logOutSuccess,
    registerSuccess,
} from './action';
import { getUser, registerUser } from '~/utilities/store-helpers';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};

const registerModalSuccess = (type) => {
    notification[type]({
        message: 'Account created successfully!',
        description: 'Account created successfully!',
    });
};

const registerModalWarning = (type) => {
    notification[type]({
        message:
            'There is some error creating account, please try again later!',
        description:
            'There is some error creating account, please try again later!',
    });
};

/**
 *
 * @param {identifier, password} creds
 */
function* loginSaga({ creds }) {
    try {
        const response = yield call(getUser, creds);
        const { jwt } = response.data;
        const { username, email } = response.data.user;
        const data = { email, username, token: jwt };
        localStorage.setItem('user', JSON.stringify(data));
        yield put(loginSuccess(data));
        modalSuccess('success');
    } catch (err) {
        console.log(err);
        modalWarning('warning');
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        localStorage.removeItem('user');
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

/**
 *
 * @param {username, email, password} creds
 */
function* registerSaga({ creds }) {
    try {
        const response = yield call(registerUser, creds);
        const { jwt } = response.data;
        const { username, email } = response.data.user;
        const data = { email, username, token: jwt };
        localStorage.setItem('user', JSON.stringify(data));
        yield put(registerSuccess(data));
        registerModalSuccess('success');
    } catch (err) {
        console.log(err);
        registerModalWarning('warning');
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
}
