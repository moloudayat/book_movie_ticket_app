import { put } from 'redux-saga/effects';
import { fetchUserApi } from '../../apis';
import { userActions } from '../../actions';

function* fetchUser(action) {
    const {payload: {callback, ...data}} = action;
    yield put(userActions.fetchUserRequest());
    const result = yield fetchUserApi(data);
    if (result.state.success) {
        yield put(userActions.fetchUserSuccess(result.data))
        callback();
    } else {
        yield put(userActions.fetchUserFailure())
    }
}

export {
    fetchUser,
}