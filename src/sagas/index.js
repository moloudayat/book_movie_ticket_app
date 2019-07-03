import { takeEvery } from 'redux-saga/effects';

import { userType } from '../actions/types/User';
;
import * as userSaga from './User';

const types = {
    ...userType,
}

export default function* rootSaga() {
    yield takeEvery(types.FETCH_USER, userSaga.fetchUser);
}