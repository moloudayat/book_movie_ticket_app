const createTypes = (result, action) => {
    result[action] = action;
    result[`${action}_SUCCESS`] = `${action}_SUCCESS`;
    result[`${action}_FAILURE`] = `${action}_FAILURE`;
    result[`${action}_REQUEST`] = `${action}_REQUEST`;
}

const createActionTypes = (actions) => {
    const result = {};

    if (actions instanceof Array) {
        actions.map(action => {
            createTypes(result, action);
        })
    } else {
        createTypes(result, actions)
    }

    return result;
}

export default createActionTypes;
