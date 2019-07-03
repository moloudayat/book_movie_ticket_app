import createReducer from '../../redux-utility/createReducer';
import {userType} from '../../actions/types/User';

const initialState={
    firstName: null,
    lastName: null,
    image: null,
    username: null,
    password: null,
    email: null,
    mobile: null,
    id: null
}

export default createReducer(initialState, userType.CLEAR_USER, userType.CHANGE_USER, [userType.FETCH_USER_SUCCESS])