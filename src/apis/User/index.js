import appConfg from '../../res/values/config';
import AjaxCaller from '../../utility/ajax-caller';
import { FETCH_USER_API } from '../../res/strings/api';

const caller = new AjaxCaller();
const { serverURL } = appConfg;
// APIs
const fetchUserApi = (params) => caller.get({ path: `${serverURL}${FETCH_USER_API}`, params});

export {
    fetchUserApi,
};
