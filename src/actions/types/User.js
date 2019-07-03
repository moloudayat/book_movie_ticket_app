import createActionType from '../../redux-utility/createActionType';

const userType = {
    CLEAR_USER: 'CLEAR_USER',
    CHANGE_USER: 'CHANGE_USER',
    ...createActionType('FETCH_USER'),
}

export {
    userType,
}