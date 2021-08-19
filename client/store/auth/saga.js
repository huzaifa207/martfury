import { all, put, call, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import Repository, { baseUrl } from '~/repositories/Repository';

import { actionTypes, loginSuccess, logOutSuccess } from './action';

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

function getUser(creds) {
    return Repository.post(`${baseUrl}/auth/local`, creds);
}

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

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
