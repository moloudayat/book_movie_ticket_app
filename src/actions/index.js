import actionBinder from '../redux-utility/actionBinder';
import {userType} from './types/User';

const userActions = actionBinder(Object.values(userType));

export {
    userActions,
}